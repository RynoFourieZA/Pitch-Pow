//React Router
import {
	BrowserRouter,
	Switch,
	Route,
	Link
} from "react-router-dom";

//
import { useEffect, useState } from "react";

//React Components
import StudentMenu from "../student/studentMenu";
import MyPitch from "./myPitch";
import Resources from "./resources";
import Competitions from "./competitions";
import MyProfile from "../student/profile";
import ChooseYourBusiness from "../student/ChooseYourBusiness";
import RichTextEditor from '../RichTextEditor';
import ChooseYourBusiness from "./ChooseYourBusiness";

function StudentDashboard({ setAuth }) {
	const [pitchData, setPitch] = useState([]);

	return (
		window.location.pathname === "/dashboard/student/create-new-biz-pitch" ? (
		<main>
			<div className="d-flex">
				<div className="dashboardNav py-3 col-sm-12 col-md-12 col-lg-1 col-xl-1">
					<StudentMenu setAuth={setAuth} />
				</div>

				<div className="col-sm-12 col-md-12 col-lg-11 col-xl-11 overflow-auto">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
							<RichTextEditor />
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
		) 
		: window.pathname.location === "/dashboard/student/create-exist-biz-pitch" ? (
			<main>
			<div className="d-flex">
				<div className="dashboardNav py-3 col-sm-12 col-md-12 col-lg-1 col-xl-1">
					<StudentMenu setAuth={setAuth} />
				</div>

				<div className="col-sm-12 col-md-12 col-lg-11 col-xl-11 overflow-auto">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
							<RichTextEditor />
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
		)
		: (
		<main>
			<div className="row main">
				<div className="dashboardNav py-3 container col-sm-12 col-md-12 col-lg-3 col-xl-3">
					<StudentMenu setAuth={setAuth} />
				</div>

				<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
					<div className="">
						<Switch>
							<Route path={`/dashboard/student/pitch`} component={MyPitch}/>
							<Route path={`/dashboard/student/resources`} component={Resources}/>
							<Route path={`/dashboard/student/competitions`} component={Competitions}/>
							<Route path={`/dashboard/student/myprofile`} component={MyProfile}/>	
							<Route path={`/dashboard/student/create-pitch`} component={ChooseYourBusiness}/>
						</Switch>
					</div>
				</div>
			</div>
		</main>
		)
	);
}

export default StudentDashboard;
