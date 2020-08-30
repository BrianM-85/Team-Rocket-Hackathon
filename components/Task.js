import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {

  let draggingStatus = props.isDragging ? 'task is-dragging' : 'task';
  
  const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? "#A5FFD6" : "#fff",
    ...draggableStyle
  });

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div onClick={() => props.setSelectedCardFunction(props.task.id)}
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