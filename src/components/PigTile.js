import React, {useState} from "react";

function RenderPigTile(props) {
    const [piggyCard, setPiggyCard] = useState(false);
    const onClick = () => setPiggyCard(true);
    const PigStats = () => <ul>
                        <li>Specialty: {props.specialty}</li>
                        <li>Greased? {props.greased}</li>
                        <li>Weight: {props.weight}</li>
                        <li className = "achievementText">Awards: {props.medal}</li>
                     </ul>   
      return(
        <div className = "pigTile" onClick ={onClick}>
            <h2>{props.name}</h2>
            <img src = {props.image} alt={props.name}/>
            {piggyCard ? < PigStats/> : null}  
        </div>
      );

}

// {piggyCard ? <Component /> : null}

export default RenderPigTile;