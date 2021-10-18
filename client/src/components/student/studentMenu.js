import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faPuzzlePiece, faTrophy, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

//
import profileImage from "../../assets/images/business-man.png";

export default function StudentMenu({ setAuth, pathName }) {
	let match = useRouteMatch();
	
	const [role, SetRole] = useState("Student");
	const [studentName, setStudentName] = useState("");
	const [studentNumber, setStudentNumber] = useState("");


	async function getProfile() {
		try {
            
			const response = await fetch("/api/dashboard/profile", {
				method: "GET",
				headers: { token: sessionStorage.token },
			});

			const parseRes = await response.json();
			setStudentName(parseRes.name)
			
			setStudentNumber(parseRes.student_number);
			
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getProfile();
	}, []);

	function logout(e) {
		e.preventDefault();
		sessionStorage.removeItem("token");
		setAuth(false);
		toast.success("Logged out successfully");
	}
	
	return (
		<div className="dashMenu">
			<div className="text-center pt-4">
				<img src={profileImage} alt="image-of-user" width="100px" />
				<p className="pt-2">{studentName}</p>
				<p className="pt-2 student-num">Student no: {studentNumber}</p>
			</div>

			<div className="py-5 dashNav">
				<div className="text-start px-5">
					<ul>
						<li>
							<NavLink to={`${match.url}/step2`}>
								<FontAwesomeIcon icon={faFileAlt} /> My Pitch
							</NavLink>
						</li>

						<li>
							<NavLink to={`dashboard/step7`}>
								<FontAwesomeIcon icon={faUserCircle} /> My Profile
							</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<div className="text-center">
				<button className="yellowButton" onClick={(e) => logout(e)}>
					Logout
				</button>
			</div>
		</div>
	);
}
