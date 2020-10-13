import React from 'react';

function ScoreCard({name, score, active}) {
// function ScoreCard(props) {
  return (
    <div className={`card${active ? ` active` : ''}`}>
      <h1 className="player-name">PLAYER {name}</h1>
      <p className="player-score"> {score} </p>
    </div>

    // <div className={`card${props.active ? ` .active` : ``}`}>
    //   <h1 className="player-name">PLAYER {props.name} </h1>
    //   <p className="player-score"> {props.score} </p>
    // </div>

  );
}

export default ScoreCard;