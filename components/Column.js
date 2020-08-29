import React from 'react';
import Task from './Task';

const Column = (props) => {
  return (
    <div className="column container">
      <div className="column-title title">
        {props.column.title}
      </div>

      <div className="tasklist container">
        {props.tasks.map((task) => <Task key={task.id} task={task} />)}
      </div>
    </div>
  )
}

export default Column;