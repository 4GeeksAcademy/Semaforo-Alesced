import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [ SelectedColor, setSelectedColor ] = useState ("green");

	return (
		<>
			<div className="Bar"></div>
			<div className="Traffic-Light">
				<div
					onClick={() => setSelectedColor("red")}
					className={"Light red" + (SelectedColor === "red" ? " glow" : "")}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={"Light yellow" + (SelectedColor === "yellow" ? " glow" : "")}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={"Light green" + (SelectedColor === "green" ? " glow" : "")}></div>
			</div>
		</>
	);
};

export default Home;