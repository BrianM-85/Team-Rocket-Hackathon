import React, { Fragment } from "react";

const AddCard = () => {
  let cardFields = (
    <div className="card">
      <div className="card-header">
        <p className="is-primary has-text-dark" onClick={expandCard}>
          {" "}
          ＋ Add a new task
        </p>
      </div>
    </div>
  );
  const expandCard = () => {
    cardFields = <input type="textarea" />;
  };
  return (
    <div className="card">
      <div className="card-header">
        <p className="is-primary has-text-dark" onClick={expandCard}>
          {" "}
          ＋ Add a new task
        </p>
        {cardFields}
      </div>
    </div>
  );
};

export default AddCard;
