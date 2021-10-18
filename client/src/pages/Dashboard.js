import { useEffect, useState } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";

//CSS
import "../assets/css/dashboard.css";

//
import MentorDashboard from "../components/mentor/MentorDashboard";
// import StudentDashboard from "../components/student/StudentDashboard";
import Stepper from "../components/student/Stepper";
import StudentMenu from "../components/student/studentMenu";
import MyPitch from "../components/student/myPitch";
import ChooseYourBusiness from "../components/student/ChooseYourBusiness";
import MyProfile from "../components/student/profile";

function Dashboard({ setAuth }) {
	const [id, setId] = useState("");

	async function getId() {
		try {
			const response = await fetch("/api/dashboard/", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
			setId(parseRes.role_type_id);
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getId();
	}, []);

	return (
		<main className="main">
			{parseInt(id) === 1 ? (
				<div className="d-flex main">
					<div className="dashboardNav py-3 container col-sm-12 col-md-12 col-lg-3 col-xl-3">
					<StudentMenu setAuth={setAuth} />
					</div>
					<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
						{ location.path="/dashboard/step6" === true ? <MyProfile /> : <Stepper setAut={setAuth} /> }
						{/* <div className="">
							<Switch>
								<Route path={`/dashboard/student/create-pitch`} component={ChooseYourBusiness} />
								<Route exact path="/dashboard/Stepper" component={Stepper} />
							</Switch>
						</div> */}
					</div>
				</div>
			) : (
				<MentorDashboard setAuth={setAuth} />
			)}
		</main>
	);
}

export default Dashboard;
