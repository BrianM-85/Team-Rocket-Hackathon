import React, { useState } from "react";

const CardModal = (props) => {
  // id = task1
  const cardData = "localStorage.getItem(selectedCard)";
  // = {title: "title"
  //            description: "description"}

  let title;
  let description;
  if (props.selectedCard) {
    title = props.getData.tasks[props.selectedCard].content;
    if (props.getData.tasks[props.selectedCard].description) {
      description = props.getData.tasks[props.selectedCard].description;
    }
  }
  let isActive = false;

  if (props.selectedCard) {
    isActive = true;
  } else {
    isActive = false;
  }
  const closeFunction = () => {
    props.setSelectedCard(null);
  };
  return (
    <div id={props.id} className={`modal ${isActive ? "is-active" : ""}`}>
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
          <button className="button is-success">Save changes</button>
          <button className="button" 
            onClick={closeFunction}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default CardModal;
