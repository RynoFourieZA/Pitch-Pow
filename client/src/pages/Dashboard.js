import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//CSS
import '../assets/css/dashboard.css';

//
import MentorDashboard from "../components/mentor/MentorDashboard";
import StudentDashboard from "../components/student/StudentDashboard";

function Dashboard() {
    const [ userRole, setUserRole ] = useState("None");
	
    useEffect(() => {
        setUserRole("student")
	}, []);

	return (
		<main className="main">
            {
                userRole === "student" 
                ? (<StudentDashboard />)
                : userRole === "mentor" 
                ? (<MentorDashboard />)
                : (<h1>404: NOT AUTHORIZED</h1>)
            }
		</main>
	);
}

export default Dashboard;
