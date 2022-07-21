import React from "react";
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

// RenderPigTile(hogs.map);
export default App;
