//React Router
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

//
import { useEffect, useState } from "react";

//React Components
import StudentMenu from "../student/studentMenu";
import MyPitch from "./myPitch";
import Resources from "./resources";
import Competitions from "./competitions";
import MyProfile from "../student/profile";
import Questions from "../Q&A/Questions";

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
							<Route path={`/dashboard/student/pitch`}>
								<MyPitch />
							</Route>
							<Route path={`/dashboard/student/questions`}>
								<Questions />
							</Route>
							<Route path={`/dashboard/student/resources`}>
								<Resources />
							</Route>
							<Route path={`/dashboard/student/competitions`}>
								<Competitions />
							</Route>
							<Route path={`/dashboard/student/myprofile`}>
								<MyProfile />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</main>
	);
}

export default StudentDashboard;
