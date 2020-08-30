import React from "react";

const AddCard = () => {
  let cardFields = "title"
  const expandCard =() => {
  
  }
  return (
    <div className="card">
      <div className="card-header">
      <p className="is-primary has-text-dark" onClick={expandCard}> ＋ Add a new task</p>
      {cardFields}
      </div>
    </div>
  );
};

export default AddCard;
