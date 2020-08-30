import React, { Fragment, useState } from "react";

const AddCard = () => {
  const saveTask = () => {
    console.log("hello");
  };
  const collapseCard = () => {
    setCardFields(
      <p className="is-primary has-text-dark" onClick={expandCard}>
        Add a new task
      </p>
    )
  }
  const expandCard = () => {
    setCardFields(
      <form onSubmit={saveTask} id="newTaskForm">
        <div className="card-content">
          <h6>New Task Title</h6>
          <input id="taskTitle" name="taskTitle" type="text" />
          <h6>Content</h6>
          <input id="taskContent" name="taskContent" type="textfield" />
        </div>
        <footer className="card-footer">
          <button type="submit" className="card-footer-item">
            Save
          </button>

          <button
            className="card-footer-item"
            onClick={collapseCard}
          >
            Cancel
          </button>
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
    <div className="card task">
      <div className="card-header"></div>
      {cardFields}
    </div>
  );
};

export default AddCard;