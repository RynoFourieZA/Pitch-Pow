import { useEffect, useState } from "react";

import "../assets/css/dashboard.css";

import MentorDashboard from "../components/mentor/MentorDashboard";
import Stepper from "../components/student/Stepper";
import StudentMenu from "../side-panel/studentMenu";
// import MentorsMenu from "../side-panel/mentorMenu";
import MyProfile from "../side-panel/profile";

function Dashboard({ setAuth }) {
	const [id, setId] = useState("");

	async function getId() {
		try {
			const response = await fetch("/api/dashboard/", {
				method: "GET",
				headers: { token: sessionStorage.token },
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
						{ location.path ="/dashboard/step6" === true ? <MyProfile /> : <Stepper setAut={setAuth} /> }
					</div>
				</div>
			) : (
				<MentorDashboard setAuth={setAuth} />
			)}
		</main>
	);
}

export default Dashboard;
