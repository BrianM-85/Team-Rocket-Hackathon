import React, { useState } from "react";

const CardModal = (props) => {
  const cardData = "localStorage.getItem(selectedCard)"
  const title = "cardData.title"
  const description = "cardData.description"

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
    <div
      id={props.id}
      className={`modal ${isActive ? "is-active" : ""}`}
    >
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
        <section className="modal-card-body"><p>{description}</p></section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default CardModal;
