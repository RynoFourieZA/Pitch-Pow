//React
import React, { useState, useEffect } from "react";

//
import YellowButton from "../YellowButton";
import "../../assets/css/q&a.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { elementType } from "prop-types";

const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;
const times = <FontAwesomeIcon icon={faTimes} />;

export default function QuestionsAndAnswers() {
	const [myQuestions, setMyQuestions] = useState("");
	const [busDescription, setBusDescription] = useState("");
	const [pitch, setPitch] = useState("false");
	const [arr, setArr] = useState([]);

	const [isSelect, setIsSelect] = useState({
		activeObject: null,
		objects: arr,
	});

	async function getQuestions() {
		try {
			const response = await fetch("http://localhost:3100/api/questions", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
			console.log(parseRes[0]);

			setArr(parseRes);
			setMyQuestions(parseRes[myQuestions]);
			setBusDescription(parseRes[0].description);
			setPitch(parseRes[0].pitch_type_name);
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getQuestions();
	}, []);

	return (
		<div className="qNa-container">
			<h1>Pitch Perfect: The Questions Every Successful Pitch Answers</h1>
			<div className="qNa active">
				<h3 className="qNa-title">{myQuestions}</h3>
				<p className="qNa-text">{busDescription}</p>
				<p className="qNa-text">{pitch}</p>

				<button className="qNa-toggle">
					? <i className="fa-chevron-down">{chevronDown}</i>
					<i className="fas fa-times">{times}</i>
				</button>
			</div>
			{isSelect.objects.map((element, index) => {
				<div key={index} className="qNa active">
					<h1>{element.questions}</h1>
				</div>;
			})}
		</div>
	);
}
