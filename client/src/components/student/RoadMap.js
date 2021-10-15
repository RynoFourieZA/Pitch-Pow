import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../assets/css/stepper.css";
import "../../App.css"

const RoadMap = () => {
	const [inactive, setInactive] = useState(false);

	console.log("step5");

	return (
		<Router>
			<nav>
				<Link to="/home1">Home</Link>
				<Link to="/signup/step1">Sign Up</Link>
			</nav>
			<div className={`container ${inactive ? "inactive" : ""}`}>
				<Route exact path="/home1">
					<h2 className="homeTitle">Home</h2>
				</Route>
			</div>
		</Router>
	);
};

export default RoadMap;
