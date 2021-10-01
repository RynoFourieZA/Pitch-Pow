//React Router
import { Switch, Route } from "react-router-dom";
//Hooks
import { useEffect, useState } from "react";
//React Components
import MentorMenu from "../mentor/mentorMenu";
import Submissions from "./submissions";
import Resources from "./resources";
import Competitions from "./competitions";
import MyProfile from "../student/profile";

function MentorDashboard({ setAuth }) {
	const [pitchData, setPitch] = useState([]);

	useEffect(() => {
		setPitch([
			{
				name: "My Wonderful Business Pitch",
				author: "Bradley Mubenga",
			},
			{
				name: "Another Business Pitch",
				author: "Ryno Fourie",
			},
			{
				name: "Another Business Pitch",
				author: "Ryno Fourie",
			},
		]);
	}, []);

	return (
		<main>
			<div className="row main">
				<div className="dashboardNav py-3 container col-sm-12 col-md-12 col-lg-3 col-xl-3 overflow-hidden">
					<MentorMenu setAuth={setAuth} />
				</div>

				<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 overflow-auto">
					<div className="dashboardPage">
						<Switch>
							{/*Change This Route to /dashboard and not /mentor-test for production*/}
							<Route path={`/mentor-test/mentor/submission`}>
								<Submissions pitchData={pitchData} />
							</Route>
							<Route path={`/dashboard/mentor/resources`}>
								<Resources />
							</Route>
							<Route path={`/dashboard/mentor/competitions`}>
								<Competitions />
							</Route>
							<Route path={`/dashboard/mentor/myprofile`}>
								<MyProfile />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</main>
	);
}

export default MentorDashboard;
