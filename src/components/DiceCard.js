import React from 'react';

// function DiceCard(props) {
//   return (
//     <div className="card">
//       <div className="row">
//         <button className="btn btn-danger btn-fw">Roll</button>
//         <button className="btn btn-success btn-fw">Keep</button>
//       </div>
//       <div className="row">
//         <div className="dice-score"> {props.dicescore} </div>
//       </div>
//       <div className="row">
//         <p className="round-score">Round Score : {props.roundscore} </p>
//       </div>
//     </div>
//   );
// }

function DiceCard({ diceScore, roundScore, roll, keep}) {
  return (
    <div className="card">
      <div className="row">
        <button className="btn btn-danger btn-fw" onClick={roll}>Roll</button>
        <button className="btn btn-success btn-fw" onClick={keep} disabled ={roundScore === 0 ? true : false} >Keep</button>
      </div>
      <div className="row">
        <div className="dice-score"> {diceScore} </div>
      </div>
      <div className="row">
        <p className="round-score">Round Score : {roundScore} </p>
      </div>
    </div>
  );
}

export default DiceCard;