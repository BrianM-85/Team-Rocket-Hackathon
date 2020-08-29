import React, { useState } from 'react';
import initialData from '../initial-data.js';
import Column from './Column';

const App = () => {
  const [getData, setData] = useState(initialData);

  const columnComponents = getData.columnOrder.map(columnId => {
    const column = getData.columns[columnId];
    const tasks = column.taskIds.map((taskId) => getData.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  })

  return (
    <>
      {columnComponents}
    </>
  )
};

export default App;