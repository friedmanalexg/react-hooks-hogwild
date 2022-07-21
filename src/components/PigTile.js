import React, {useState} from "react";

function RenderPigTile(props) {
    const [piggyCard, setPiggyCard] = useState("true");
    const onClick = () => setPiggyCard(true);

      return(
        <div className = "pigTile" onClick ={onClick}>
            <h2>{props.name}</h2>
            <img src = {props.image} alt={props.name}/>
            <ul>
                <li>{props.specialty}</li>
                <li>{props.greased}</li>
                <li>{props.weight}</li>
                <li className = "achievementText">{props.medal}</li>
            </ul>   
        </div>
      );

}

// {piggyCard ? <Component /> : null}

export default RenderPigTile;