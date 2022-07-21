import React, {useState} from "react";
import Nav from "./Nav";
import RenderPigTile from "./PigTile";
import hogs from "../porkers_data";

function App() {
	// sort state
	 const [sortStatus, setSortStatus] = useState(false);
	 
	//filter state
	const [filterStatus, setFilterStatus] = useState(false);
	const filteredHogs = hogs.filter(hog => hog.greased === filterStatus)
	const sortMethod = hogs.name;
	const sortedPiggies = filteredHogs.sort(sortMethod)
	// fix the sort method const to switch between booleans
	

	let pigCards = sortedPiggies.map((hogObj) => {

		

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
			<button onClick ={sortPiggies}>Sort By Weight or Name?</button>
			<main>
			{pigCards}
			</main>
		</div>
	);

	function hideGreased() {
		return setFilterStatus(prevFilterStatus => !prevFilterStatus);
	}

	 function sortPiggies() {
	 	return setSortStatus(prevSortStatus => !prevSortStatus);
	}
}



export default App;
