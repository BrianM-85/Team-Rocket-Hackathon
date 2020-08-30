import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from '../initial-data.js';
import Column from './Column';

const App = () => {
  const [getData, setData] = useState(initialData);
  const [getResult, setResult] = useState({
    draggableId: 'task-1',
    type: 'TYPE',
    source: {
      droppableId: 'column-1',
      index: 0
    },
    destination: null
  })
  const [getDraggableSnapshot, setDraggableSnapshot] = useState({
    isDragging: true,
    draggingOver: 'column-1',
  })
  const [getDroppableSnapshot, setDroppableSnapshot] = useState({
    isDraggingOver: true,
    draggingOverWith: 'task-1'
  })

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(getData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setData({
        ...getData,
        columnOrder: newColumnOrder
      })
    }

    const start = getData.columns[source.droppableId];
    const finish = getData.columns[destination.droppableId];

    //Moving a task within the same column.
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      setData({
        ...getData, 
        columns: {
          ...getData.columns,
          [newColumn.id]: newColumn
        }
      })
    } else {
      //Moving from one list to another.
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      }

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      }

      setData({
        ...getData,
        columns: {
          ...getData.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      })
    }
  }

  const columnComponents = getData.columnOrder.map((columnId, index) => {
    const column = getData.columns[columnId];
    const tasks = column.taskIds.map((taskId) => getData.tasks[taskId]);

    return (
      <Column
        key={column.id}
        column={column}
        tasks={tasks}
        index={index}
      />
    )
  })

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable 
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <div className="hero is-fullheight">
            <div className="container is-fluid">
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="columns"
              >
                {columnComponents}
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
};

export default App;