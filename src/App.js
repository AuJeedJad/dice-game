import React, { Fragment, useState } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import DiceCard from './components/DiceCard';

function App() {
  const [playerScore, setplayerScore] = useState([0, 0]);
  const [currentPlayer, setcurrentPlayer] = useState(0);
  const [diceScore, setdiceScore] = useState(1);   //ลูกเต๋า
  const [roundScore, setroundScore] = useState(0);  //คะแนนสะสมแต่ระรอบ

  
  const roll = () => {
    const newDiceScore = Math.ceil(Math.random() * 6);
    setdiceScore(newDiceScore);
    if(newDiceScore === 1) {
      setcurrentPlayer(currentValue => currentValue === 0 ? 1 : 0);
      setroundScore(0);
    } else {
      setroundScore(currentValue => currentValue + newDiceScore);
    }
  }

  const keep = () => {
    setplayerScore(currentValue =>
      currentValue.map((ele, idx) =>
        idx === currentPlayer ? ele + roundScore : ele))
    setcurrentPlayer(currentValue => currentValue === 0 ? 1 : 0);
    setroundScore(0);
  }

  const reset = () => {
    setplayerScore([0, 0])
    setcurrentPlayer(0)
    setdiceScore(1)
    setroundScore(0)
  }

  return (
    <Fragment>
      <Header reset={reset} />
      <div className="container">
        <ScoreCard
          name="1"
          score={playerScore[0]}
          active={currentPlayer === 0 ? true : false} />
        <DiceCard 
          diceScore={diceScore}
          roundScore={roundScore}
          roll={roll}
          keep={keep}/>
        <ScoreCard
          name="2"
          score={playerScore[1]}
          active={currentPlayer === 1 ? true : false} />
      </div>
    </Fragment>
  );
}

export default App;
