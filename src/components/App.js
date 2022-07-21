import React, {useState} from "react";
import Nav from "./Nav";
import RenderPigTile from "./PigTile";
import hogs from "../porkers_data";

function App() {
	const pigCards = hogs.map((hogObj) => {
		return(
	  		<RenderPigTile
      			key={hogObj.name} 
      			name={hogObj.name} 
      			image={hogObj.image} 
				weight={hogObj.weight}
				greased = {hogObj.greased}
				specialty = {hogObj.specialty}
				medal = {hogObj["highest medal achieved"]}
      		/>
		)
	});

	return (
		<div className="App">
			<Nav />
			<main>
			{pigCards}
			</main>
		</div>
	);
}

export default App;
