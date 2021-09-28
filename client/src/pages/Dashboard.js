import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//CSS
import '../assets/css/dashboard.css';

//
import MentorDashboard from "../components/mentor/MentorDashboard";
import StudentDashboard from "../components/student/StudentDashboard";

function Dashboard( {setAuth} ) {
    const [ userRole, setUserRole ] = useState("None");
	
    useEffect(() => {
        // User in the database { role }
        setUserRole("Student")
	}, []);

	return (
		<main className="main">
            {
                userRole === "Student" 
                ? (<StudentDashboard setAuth={setAuth}/>)
                : userRole === "mentor" 
                ? (<MentorDashboard setAuth={setAuth}/>)
                : (<h1>404: NOT AUTHORIZED</h1>)
            }
		</main>
	);
}

export default Dashboard;
