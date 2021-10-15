import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/stepper.css";

const StepIndicator = () => {
	const steps = [
		{
			path: "/step1",
		},
		{
			path: "/step2",
		},
		{
			path: "/step3",
		},
		{
			path: "/step4",
		},
	];

    const handleStop = (e) => {
        e.preventDefault();
    }
	console.log("step3");


	return (
		<div className="stepIndicator">
			{steps.map((step, index) => {
				<>
					<NavLink onClick={handleStop} activeClassName="activeLink" key={index} to={step.path}>
						{index + 1}
					</NavLink>
					<hr />
				</>
			})}
		</div>
	);
};

export default StepIndicator;
