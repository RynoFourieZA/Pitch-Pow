//Hooks
import { useEffect, useState } from "react";
//React Router
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";
//React Components
import MentorMenu from "./MentorMenu";
import Submissions from "./Submissions";
import Resources from "./Resources";
import Competitions from "./Competitions";
import MentorsProfile from "./MentorsProfile";
import WriteComments from "./Comments/WriteComments";

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
							<Route path={`/dashboard/mentor/submission`}>
								<Submissions pitchData={pitchData} />
							</Route>
							<Route path={`/dashboard/mentor/comment`}>
								<WriteComments/>
							</Route>
							<Route path={`/dashboard/mentor/resources`}>
								<Resources />
							</Route>
							<Route path={`/dashboard/mentor/competitions`}>
								<Competitions />
							</Route>
							<Route path={`/dashboard/mentor/profile`}>
								<MentorsProfile />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</main>
	);
}

export default MentorDashboard;
