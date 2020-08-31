import React, {Fragment} from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
  
  const getItemStyle = (isDragging, draggableStyle) => ({
      background: isDragging ? "#E0F654" : "#fff",
      ...draggableStyle
  });

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          onClick={() => props.setSelectedCardFunction(props.task.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task"
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {" "}
          {props.task.content}
        </div>
      )}
    </Draggable>
    
  );
};

export default Task;
