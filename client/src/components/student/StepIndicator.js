import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/stepper.css";

const StepIndicator = () => {
	const steps = [
		{
			path: "/dashboard",
		},
		{
			path: "/dashboard/step2",
		},
		{
			path: "/dashboard/step3",
		},
		{
			path: "/dashboard/step4",
		},
		{
			path: "/dashboard/step5",
		},
	];

    const handleStop = (e) => {
        e.preventDefault();
    }
	console.log("step3");


	return (
		<div className="stepIndicator">
			{steps.map((step, index) => {
				return (
					<>
					<NavLink onClick={handleStop} activeClassName="activeLink" key={index} exact to={step.path}>
						{index + 1}
					</NavLink>
					<hr />
					</>
					)
			})}
		</div>
	);
};

export default StepIndicator;
