import React, { useState } from "react";

const CardModal = (props) => {
  let title;
  let description;
  if (props.selectedCard) {
    title = props.getData.tasks[props.selectedCard].content;
    if (props.getData.tasks[props.selectedCard].description) {
      description = props.getData.tasks[props.selectedCard].description;
    }
  }
  let isActive = false;
  const deleteOnClickFunction = () => {
    props.setDeleteInitializer("is-active")
  }
  if (props.selectedCard) {
    isActive = true;
  } else {
    isActive = false;
  }
  const closeFunction = () => {
    props.setSelectedCard(null);
  };
  return (
    <div id={props.selectedCard} className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            onClick={closeFunction}
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <p>{description}</p>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-warning"
            onClick={() => deleteOnClickFunction()}
          >
            Delete Task
          </button>
          <button className="button" onClick={closeFunction}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CardModal;
