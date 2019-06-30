import React from "react";

function ScoreCounter(props){
    return(
        <div className="score">
            <p>SCORE: {props.score}</p>
            <p>HIGH SCORE: {props.high}</p>
        </div>
    )
}

export default ScoreCounter;