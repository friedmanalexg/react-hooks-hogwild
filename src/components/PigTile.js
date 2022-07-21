import React from "react";
import PigStats from "./PigStats";

function RenderPigTile(props) {
      return(
        <div className = "pigTile">
            <h2>{props.name}</h2>
            <img src = {props.image} alt={props.name}/>
            <PigStats />
        </div>
      );

}


export default RenderPigTile;