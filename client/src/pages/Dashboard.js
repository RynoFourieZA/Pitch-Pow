import { useEffect, useState } from "react";
//CSS
import "../assets/css/dashboard.css";

//
import MentorDashboard from "../components/mentor/MentorDashboard";
import StudentDashboard from "../components/student/StudentDashboard";

function Dashboard({ setAuth }) {
	const [id, setId] = useState("");

	async function getId() {
		try {
			const response = await fetch("http://localhost:3100/api/dashboard/", {
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
					<StudentDashboard setAuth={setAuth} />
			) :  (
				<MentorDashboard setAuth={setAuth} />
			)}
		</main>
	);
}

export default Dashboard;
