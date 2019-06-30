import React from "react";

function Pic (props){
    return(
        <img 
            alt={props.color}
            src={props.url}
        />
    )
}

export default Pic;