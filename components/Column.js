import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import AddCard from "./AddCard"
const Column = (props) => {
  const [getTitle, setTitle] = useState(props.column.title)

  const getItemStyle = (isDraggingOver, droppableStyle) => ({
    background: isDraggingOver ? "#84DCC6" : "#fff",
    ...droppableStyle
  });

  let columnId = props.column.id

  const inputHandler = (columnName) => {
    let newTitle = document.getElementById(columnName).innerHTML
        props.setData({
          ...props.getData,
          columns: {
            ...props.getData.columns,
            [columnId]: {
              ...props.getData.columns[columnId],
              title: newTitle
            },
          },
        })
  }

  let columnName = document.getElementById(props.column.title);

  return (
    <div className="column m-lg">
      <div className="column-title title"
      suppressContentEditableWarning
      id={props.column.title}
      contentEditable="true"
      // onInput={() => inputHandler(props.column.title)}
      >
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
      <AddCard />
    </div>
  )
}

export default Column;