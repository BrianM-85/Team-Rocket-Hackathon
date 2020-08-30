import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import AddCard from "./AddCard";
const Column = (props) => {
  const getItemStyle = (isDraggingOver, droppableStyle) => ({
    background: isDraggingOver ? "#84DCC6" : "#fff",
    ...droppableStyle,
  });

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="column m-sm is-one-fifth has-background-white"
        >
          <h6 {...provided.dragHandleProps} className="title is-6">
            {provided.placeholder}
            {props.column.title}
          </h6>
          <AddCard
            columnID={props.column.id}
            getData={props.getData}
            setData={props.setData}
          />

          <Droppable droppableId={props.column.id} type="task">
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
                {props.tasks.map((task, index) => (
                  <Task
                    setSelectedCardFunction={props.setSelectedCardFunction}
                    key={task.id}
                    task={task}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
