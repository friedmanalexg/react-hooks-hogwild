import React from "react";

function PigStats(props) {
    return(
        <>
        <span>{props.specialty}</span>
        <span>{props.greased}</span>
        <span>{props.weight}</span>
        <span className = "achievementText">{props.medal}</span>
        </>       
      );
}

export default PigStats;