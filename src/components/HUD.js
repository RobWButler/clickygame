import React from "react";
import ScoreCounter from "./ScoreCounter";
import LastClickedReview from "./LastClickedReview"

function HUD(props){

    function showLastColor(lastColor) {
        if(lastColor){
            return <LastClickedReview
            path={"./img/" + (props.lastClicked) + ".png"}
        />
        }
    }
    return(
        <div className="row">
            <ScoreCounter
                score={props.score}
                high={props.high}/>
            {showLastColor(props.lastClicked)}
        </div>

    )
}

export default HUD;