import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = (props) => {

  const getItemStyle = (isDraggingOver, droppableStyle) => ({
    background: isDraggingOver ? "#84DCC6" : "#fff",
    ...droppableStyle
  });

  return (
    <div className="column m-lg">
      <div className="column-title title">
        {props.column.title}
      </div>

      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <div
            className="tasklist"
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={getItemStyle(
              snapshot.isDraggingOver,
              provided.droppableProps.style
            )}
          >
            {props.tasks.map((task, index) => <Task setSelectedCardFunction={props.setSelectedCardFunction} key={task.id} task={task} index={index}/>)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column;