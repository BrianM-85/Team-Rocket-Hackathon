import React, { Fragment, useState } from "react";
import CardModal from "./components/CardModal";
const App = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const setSelectedCardFunction = (taskNumber) => {
    // search for CardModal with an id===taskNumber
    // set className of matching CardModal === is active
    if (selectedCard == null){
    setSelectedCard(taskNumber)}
    else{
      setSelectedCard(null)
    }
  };
  
  return (
    <>
      <div
        className="card"
        onClick={() => setSelectedCardFunction("task1")}
      >
        Click for Modal
      </div>
      
      <CardModal id={selectedCard} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
    </>
  );
};

export default App;
