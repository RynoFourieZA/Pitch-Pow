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
import ChooseYourBusiness from "./ChooseYourBusiness";

function StudentDashboard({ setAuth }) {
	const [pitchData, setPitch] = useState([]);

	return (
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
						</Switch>
					</div>
				</div>
			</div>
			<ChooseYourBusiness  />
		</main>
	);
}

export default StudentDashboard;
