import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initialData from "../initial-data.js";
import Column from "./Column";
import CardModal from "./CardModal";
import WarningModal from "./WarningModal.js";

const App = () => {
  var storedValues = JSON.parse(localStorage.getItem("LocalStorageValues"));
  const [getData, setData] = useState(storedValues || initialData);
  const [deleteInitializer, setDeleteInitializer] = useState(null);
  const [getResult, setResult] = useState({
    draggableId: "task-1",
    type: "TYPE",
    source: {
      droppableId: "column-1",
      index: 0,
    },
    destination: null,
  });
  const [getDraggableSnapshot, setDraggableSnapshot] = useState({
    isDragging: true,
    draggingOver: "column-1",
  });
  const [getDroppableSnapshot, setDroppableSnapshot] = useState({
    isDraggingOver: true,
    draggingOverWith: "task-1",
  });

  useEffect(() => {
    localStorage.setItem("LocalStorageValues", JSON.stringify(getData));
  }, [getData]);

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

    if (type === "column") {
      const newColumnOrder = Array.from(getData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setData({
        ...getData,
        columnOrder: newColumnOrder,
      });
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
        taskIds: newTaskIds,
      };

      setData({
        ...getData,
        columns: {
          ...getData.columns,
          [newColumn.id]: newColumn,
        },
      });
    } else {
      //Moving from one list to another.
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      setData({
        ...getData,
        columns: {
          ...getData.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      });
    }
  };

  const addColumnClick = (event) => {
    event.preventDefault();

    let columnName = document.getElementById("column_name").value;
    let newColumnName =
      "column-" + (Object.keys(getData.columns).length + 1);
    let newColumn = {
      id: newColumnName,
      title: columnName,
      taskIds: ["task-0"],
    };
    let newColumnOrder = getData.columnOrder;
    newColumnOrder.push(newColumnName);
    setData({
      ...getData,
      columns: {
        ...getData.columns,
        [newColumnName]: newColumn,
      },
      columnOrder: newColumnOrder,
    });
  }

  const [selectedCard, setSelectedCard] = useState(null);
  const setSelectedCardFunction = (taskNumber) => {
    if (selectedCard === null) {
      setSelectedCard(taskNumber);
    } else {
      setSelectedCard(null);
    }
  };

  const columnComponents = getData.columnOrder.map((columnId, index) => {
    const column = getData.columns[columnId];
    const tasks = column.taskIds.map((taskId) => getData.tasks[taskId]);
    return (
      <Column
        key={column.id}
        column={column}
        tasks={tasks}
        index={index}
        getData={getData}
        setData={setData}
        setSelectedCardFunction={setSelectedCardFunction}
      />
    );
  });

  return (
    <div>
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
                  className="columns scrolling-wrapper"
                >
                  {columnComponents}
                  {provided.placeholder}
                  <div className="add-column">
                    <label><strong>+ Add Column</strong></label>
                    <span className="level has-addons">
                      <input className="input is-small level-right" type="text" id="column_name" name="column_name" placeholder="New Title" />
                      <button className="button is-primary is-small level-left" onClick={addColumnClick}><strong>+</strong></button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <CardModal
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        getData={getData}
        setData={setData}
        deleteInitializer={deleteInitializer}
        setDeleteInitializer={setDeleteInitializer}

      />
      <WarningModal
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        getData={getData}
        setData={setData}
        deleteInitializer={deleteInitializer}
        setDeleteInitializer={setDeleteInitializer}
      />
    </div>
  );
};

export default App;
