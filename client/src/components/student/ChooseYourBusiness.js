import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import NewPitch from "./NewPitch";
import ExistingPitch from "./ExistingPitch";

function ChooseYourBusiness() {
    return (
        <section className="rightColumn">
			<div className="container py-5">
				<div>
					<h1 className="heading pb-2">My Profile</h1>
					<span className="underline"></span>
				</div>
                <Switch>
					<Route path="/dashboard/student/create-pitch/new">
						<NewPitch />
					</Route>
					<Route path="/dashboard/student/create-pitch/existing">
						<ExistingPitch />
					</Route>
				</Switch>
			</div>
		</section>
    )
}

export default ChooseYourBusiness
