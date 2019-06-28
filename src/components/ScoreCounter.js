import React from "react";

function ScoreCounter(props){
    return(
        <p className="score">SCORE: {props.score}</p>
    )
}

export default ScoreCounter;