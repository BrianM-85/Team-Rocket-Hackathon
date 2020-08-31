import React, {Fragment} from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
  
  const getItemStyle = (isDragging, draggableStyle) => ({
      background: isDragging ? "#E0F654" : "#fff",
      border: isDragging ? "1.5px solid #E0F654" : "1.5px solid #84DCC6",
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
          <p
            onMouseEnter={(event) => event.target.style.background = "#84DCC6"}
            onMouseLeave={(event) => event.target.style.background = ""}
          >
            {props.task.content}
          </p>
        </div>
      )}
    </Draggable>
    
  );
};

export default Task;
