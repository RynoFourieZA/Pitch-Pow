//Hooks
import { useEffect, useState } from "react";
//React Router
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
//React Components
import MentorMenu from "./mentorMenu";
import Submissions from "./submissions";
import Resources from "./resources";
import Competitions from "./competitions";
import MentorsProfile from "./MentorsProfile";
import ViewPitch from "./ViewPitch";

function MentorDashboard({ setAuth }) {

	return (
		window.location.pathname === "/dashboard/mentor/review-pitch/:id" ? (
			<main>
			<div className="d-flex">
				<div className="dashboardNav py-3 col-sm-12 col-md-12 col-lg-1 col-xl-1">
					<MentorMenu setAuth={setAuth} />
				</div>

				<div className="col-sm-12 col-md-12 col-lg-11 col-xl-11 overflow-auto">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
						</div>

						<div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 questionsColumn">
							<div className="py-2">
								<h5>Questions</h5>

								<div className="questionsCard">
									<div className="question">
										<h6>1. Business Description</h6>
										<p>Tell us more about your business and what it does.</p>
									</div>
									
									<div className="commentCard">
										<h6>Mentor Name</h6>
										<p>Good job!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main> 
		) : (
			<main>
			<div className="row main">
				<div className="dashboardNav py-3 container col-sm-12 col-md-12 col-lg-3 col-xl-3 overflow-hidden">
					<MentorMenu setAuth={setAuth} />
				</div>

				<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 overflow-auto">
					<div className="dashboardPage">
						<Switch>
							{/*Change This Route to /dashboard and not /mentor-test for production*/}
							<Route exact path={`/dashboard/mentor/submission`} component={Submissions}/>
							<Route path={`/dashboard/mentor/submission/review-pitch`} component={ViewPitch}/>
							<Route path={`/dashboard/mentor/resources`} component={Resources}/>
							<Route path={`/dashboard/mentor/competitions`} component={Competitions}/>
							<Route path={`/dashboard/mentor/profile`} component={MentorsProfile}/>
						</Switch>
					</div>
				</div>
			</div>
		</main>
		)
	);
}

export default MentorDashboard;
