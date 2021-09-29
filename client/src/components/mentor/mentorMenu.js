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
import YellowButton from "../YellowButton";

//
import profileImage from "../../assets/images/brad.png";

export default function MentorMenu({ setAuth }) {
	let match = useRouteMatch();

	const [mentorName, setMentorName] = useState("");

	async function getName() {
		try {
			const response = await fetch("http://localhost:3100/api/dashboard/", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
			console.log(parseRes);
			setMentorName(parseRes.name);
		} catch (e) {
			console.error(e.message);
		}
	}

	function logout(e) {
		e.preventDefault();
		localStorage.removeItem("token");
		setAuth(false);
	}

	useEffect(() => {
		getName();
	}, []);

	return (
		<div>
			<div className="text-center pt-4">
				<img src={profileImage} alt="image-of-user" width="100px" />
				<p className="pt-2">Mentor: {mentorName}</p>
			</div>

			<div className="py-5">
				<div className="text-start px-5">
					<ul>
						<li>
							<NavLink to={`${match.url}/mentor/submission`}>
								<FontAwesomeIcon icon={faFileAlt} /> Submissions
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
	);
}
