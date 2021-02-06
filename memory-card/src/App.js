import React, { useState, useEffect } from "react";
import "./App.css";

import Cards from "./components/Cards.js"

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pickedCard, setPickedCard] = useState([]);


  const plusScore = () => {
   setScore(score + 1);
  };

  const reset = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setPickedCard([]);
  };

  const addCard = (id) => {
    if(!pickedCard.includes(id)) {
      setPickedCard([...pickedCard, id]);
      plusScore();
    } else {
      reset();
    }
  }
 
  return (
    <div className="App">
     
      <header className="App-header">
        <h1>Memory Card Game</h1>
      </header>

      <div className="instruction">
        Do not pick any picture more than once
      </div>

      <div className="score-board">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>

      <Cards score={score} addCard={addCard}/>
      
    </div>
  );
}

export default App;
