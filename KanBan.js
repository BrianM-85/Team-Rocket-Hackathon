import React, { useState, useEffect } from "react";

const KanBan = () => {
  var storedValues = JSON.parse(localStorage.getItem("LocalStorageValues"))

  const [userValues, setUserValues] = useState(
    // storedValues || 
    [
      {"To Do": 
        {name: "Eat Lunch", name: "Work Out"}
      },
      {"In Progress": 
        {name: "Code Poorly", name: "Drink Water"}
      }
    ]
  )

  useEffect(() => {
    localStorage.setItem('LocalStorageValues', JSON.stringify(userValues));
  }, [userValues]);

  const listValues = userValues.map((object) => {
    let tasks = Object.values(object)
    debugger
    tasks.map((task) => {
      debugger
      return(
        <li>{task.name}</li>
      )
    })
    return (
      <div>
        {Object.keys(object)}
        <ul>{tasks}</ul>
      </div>
    )
  })

  return (
    <div>
      <label>New Column:</label>
      <input type="text" id="column_name" name="column_name"/>
      <button onClick={() => {setUserValues(
        [...userValues,
        document.getElementById("column_name").value]
        )}}>Create</button>  
  
      <p>Things to do:</p>
      <ul>{listValues}</ul>
      
    </div>
  )
};

export default KanBan;