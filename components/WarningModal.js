import React, { Fragment } from "react";

const WarningModal = (props) => {
  let isActive = false;

  if (props.deleteInitializer) {
    isActive = true;
  } else {
    isActive = false;
  }
  const correctTask = (task, id) => {
    if (task != id) {
      return task;
    }
  };
  const findTaskInColumn = (id, object) => {
    if (object.hasOwnProperty("taskIds") && object["taskIds"].includes(id)) {
      ;
       let index = object["taskIds"].findIndex((task) =>
       task === id
      )
      object["taskIds"].splice(index)
    }
    for (var i = 0; i < Object.keys(object).length; i++) {
      if (typeof object[Object.keys(object)[i]] == "object") {
        var o = findTaskInColumn(id, object[Object.keys(object)[i]]);
        if (o != null) return o;
      }
    }

    return null;
  };

  const deleteTask = (id) => {
    // remove from tasks and from columns
    // make array of keys from each column and iterate through that to find it?
    let tempState = Object.assign({}, props.getData);
    delete tempState.tasks[id];
    findTaskInColumn(id, tempState);
    props.setSelectedCard(null);
    props.setDeleteInitializer(null);
    props.setData(tempState);
  };
  const closeFunction = () => {
    props.setDeleteInitializer(null);
  };
  return (
    <div
      id={props.selectedCard}
      className={`modal ${isActive ? "is-active" : ""}`}
    >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            Are you sure you want to delete this task?
          </p>
          <button
            className="delete"
            onClick={closeFunction}
            aria-label="close"
          ></button>
        </header>
        <footer className="modal-card-foot">
          <button
            className="button is-warning"
            onClick={() => deleteTask(props.selectedCard)}
          >
            Delete Task
          </button>
        </footer>
      </div>
    </div>
  );
};

export default WarningModal;
