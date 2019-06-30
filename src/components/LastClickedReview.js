import React from "react";

function LastClickedReview(props){
    return(
        <div className="lastColor">
            Last Color:
            <br></br>
            <img 
                alt="Last Color Picked" 
                className="lastColor-pic"
                src={props.path}
            />
        </div>
    )
}

export default LastClickedReview;