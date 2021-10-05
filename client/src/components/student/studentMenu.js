import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileAlt,
	faPuzzlePiece,
	faTrophy,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

//
import profileImage from "../../assets/images/business-man.png";

export default function StudentMenu({ setAuth }) {
	let match = useRouteMatch();

	function logout(e) {
		e.preventDefault();
		localStorage.removeItem("token");
		setAuth(false);
        toast.success("Logged out successfully");
	}

	const [role, SetRole] = useState("Student");
	const [studentName, setStudentName] = useState("");
	const [studentNumber, setStudentNumber] = useState("");
	const [ path, setPathName ] = useState("");


	async function getProfile() {
		try {
            
			const response = await fetch(
				"http://localhost:3100/api/dashboard/profile",
				{
					method: "GET",
					headers: { token: localStorage.token },
				}
			);

			const parseRes = await response.json();
			console.log(parseRes);
			setStudentName(parseRes.name)
			setStudentNumber(parseRes.student_number);
			
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getProfile();
	}, []);

	return (
		window.location.pathname === "/dashboard/student/create-new-biz-pitch" ? (
		<div className="dashMenu text-center">
			<div className="text-center pt-4">
				<img src={profileImage} alt="image-of-user" width="30px" />
			</div>

			<div className="py-5 dashNav">
				<div className="text-start px-2">
					<ul>
						<li className="text-center">
							<NavLink to={`${match.url}/student/pitch`}>
								<FontAwesomeIcon icon={faFileAlt} />
							</NavLink>
						</li>
						<li className="text-center">
							<NavLink to={`${match.url}/student/questions`}>
								<FontAwesomeIcon icon={faFileAlt} />
							</NavLink>
						</li>

						<li className="text-center">
							<NavLink to={`${match.url}/student/resources`}>
								<FontAwesomeIcon icon={faPuzzlePiece} />
							</NavLink>
						</li>

						<li className="text-center">
							<NavLink to={`${match.url}/student/competitions`}>
								<FontAwesomeIcon icon={faTrophy} />
							</NavLink>
						</li>

						<li className="text-center">
							<NavLink to={`${match.url}/student/myprofile`}>
								<FontAwesomeIcon icon={faUserCircle} />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<div className="text-center">
				<button className="yellowButton">
					Save
				</button>
			</div>
		</div>
		) : (
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
							<NavLink to={`${match.url}/student/pitch`}>
								<FontAwesomeIcon icon={faFileAlt} /> My Pitch
							</NavLink>
						</li>
						<li>
							<NavLink to={`${match.url}/student/questions`}>
								<FontAwesomeIcon icon={faFileAlt} /> Questions
							</NavLink>
						</li>

						<li>
							<NavLink to={`${match.url}/student/resources`}>
								<FontAwesomeIcon icon={faPuzzlePiece} /> Resources
							</NavLink>
						</li>

						<li>
							<NavLink to={`${match.url}/student/competitions`}>
								<FontAwesomeIcon icon={faTrophy} /> Competitions
							</NavLink>
						</li>

						<li>
							<NavLink to={`${match.url}/student/myprofile`}>
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
		)
	);
}
