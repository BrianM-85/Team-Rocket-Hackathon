import React, { Fragment, useState } from "react";

const AddCard = () => {
  const saveTask = () => {
    console.log("hello");
  };
  const expandCard = () => {
    setCardFields(
      <form onSubmit={saveTask} id="newTaskForm">
        <div className="card-content">
          <h6>Task Title</h6>
          <input type="textarea"/>
        </div>
        <footer className="card-footer">
        <input value="Save" type="submit" className="card-footer-item"/>

        <input value="Cancel" type="submit" className="card-footer-item"/>

        </footer>
      </form>
    );
    
  };
  const [cardFields, setCardFields] = useState(
    <p className="is-primary has-text-dark" onClick={expandCard}>
      Add a new task
    </p>
  );

  return (
    <div className="card">
      <div className="card-header"></div>
      {cardFields}
    </div>
  );
};

export default AddCard;
