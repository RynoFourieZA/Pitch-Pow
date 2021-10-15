import React from "react";
import { Route, Link } from "react-router-dom";
import StepIndicator from "./StepIndicator";
import "../../assets/css/stepper.css";

const Stepper = () => {
	console.log(stepper);
	return (
		<div className="stepper">
			<div className="mainContainer">
                <StepIndicator />
				<div className="output"></div>
				<Route exact path="/pitch">
					First Step
                    <div className="btnContainer">
                        <Link to="/step2">Next</Link>
                    </div>
				</Route>
				<Route exact path="/step2">
					Second Step
                    <div className="btnContainer">
                        <Link to="/step1">Back</Link>
                        <Link to="/step3">Next</Link>
                    </div>
				</Route>
				<Route exact path="/step3">
					Third Step
                    <div className="btnContainer">
                        <Link to="/step2">Back</Link>
                        <Link to="/step4">Next</Link>
                    </div>
				</Route>
				<Route exact path="/step4">
					Fourth Step
                    <div className="btnContainer">
                        <Link to="/step3">Finish</Link>
                    </div>
				</Route>
			</div>
		</div>
	);
};

export default Stepper;
