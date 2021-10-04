import React, { useState, useEffect } from "react";
import Header from "./Header";
import YellowButton from "../YellowButton";
import "../../assets/css/q&a.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { elementType } from "prop-types";

const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;
const times = <FontAwesomeIcon icon={faTimes} />;

function Questions() {
	const [data, setData] = useState([]);
    const [active, setActive] = useState(false);

	async function getQuestions() {
		try {
			const response = await fetch("http://localhost:3100/api/questions", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
			setData(parseRes);
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getQuestions();

		(async () => await getQuestions())();
	}, []);

	return (
		<div className="qNa-container">
			<Header />
			{data.map((item, index) => (
				<div
					className=
						"questions-answers active"
					key={index}
				>
					<h3 className="questions-answers-title">{item.questions}</h3>

					<p className="questions-answers-text">{item.desciption}</p>

					<button className="questions-answers-toggle">
						<i className="fa-chevron-down">{chevronDown}</i>
						<i className="fas fa-times">{times}</i>
					</button>
				</div>
			))}
		</div>
	);
}

export default Questions;
