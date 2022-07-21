import React, {useState} from "react";
import Nav from "./Nav";
import RenderPigTile from "./PigTile";
import hogs from "../porkers_data";

function App() {
	const [filterStatus, setFilterStatus] = useState(false);
	const filteredHogs = hogs.filter(hog => hog.greased === filterStatus)
	let pigCards = filteredHogs.map((hogObj) => {
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
			<button onClick={hideGreased}>Greased?</button>
			<main>
			{pigCards}
			</main>
		</div>
	);

	function hideGreased() {
		return setFilterStatus(prevFilterStatus => !prevFilterStatus);
	}
}

export default App;
