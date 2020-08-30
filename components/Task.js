import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {

  let draggingStatus = props.isDragging ? 'task is-dragging' : 'task';
  
  const getItemStyle = (isDragging, draggableStyle) => ({
    // change background colour if dragging
    background: isDragging ? "#A5FFD6" : "#fff",
    // styles we need to apply on draggables
    ...draggableStyle
  });

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={draggingStatus}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task;