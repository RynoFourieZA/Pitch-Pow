import { useEffect, useState } from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileAlt,
	faPuzzlePiece,
	faTrophy,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import YellowButton from "../YellowButton";
import { toast } from "react-toastify";

import profileImage from "../../assets/images/business-man.png";

async function getName(setMentorName, setError) {
	try {
		const response = await fetch("/api/dashboard/", {
			method: "GET",
			headers: { token: sessionStorage.token },
		});

		const parseRes = await response.json();
		setMentorName(parseRes.name);
	} catch (e) {
		toast.error("something has gone wrong");
		setError("something has gone wrong");
	}
}

function logout(e, setAuth) {
	e.preventDefault();
	sessionStorage.removeItem("token");
	setAuth(false);
	toast.success("Logged out successfully");
}

export default function MentorMenu({ setAuth }) {
	let match = useRouteMatch();

	const [mentorName, setMentorName] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (!mentorName) getName(setMentorName, setError);
	}, []);

	if (error) return <p>{error}</p>;

	return (
		<div>
			<div className="text-center pt-4">
				<img src={profileImage} alt="image-of-user" width="100px" />
				<p className="pt-2">{mentorName}</p>
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
							<NavLink to={`${match.url}/mentor/profile`}>
								<FontAwesomeIcon icon={faUserCircle} /> My Profile
							</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<div className="text-center">
				<button className="yellowButton" onClick={(e) => logout(e, setAuth)}>
					Logout
				</button>
			</div>
		</div>
	);
}
