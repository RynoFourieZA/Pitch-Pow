//React
import React, { useState, useEffect } from "react";

//
import YellowButton from "../YellowButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { elementType } from "prop-types";

const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;
const times = <FontAwesomeIcon icon={faTimes} />;

export default function QuestionsAndAnswers() {

	async function getQuestions() {
		try {
			const response = await fetch("http://localhost:3100/api/questions", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
			console.log(parseRes[0]);

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
				<h3 className="qNa-title">123</h3>
				<p className="qNa-text">123</p>
				<p className="qNa-text">123</p>

				<button className="qNa-toggle">
					? <i className="fa-chevron-down">{chevronDown}</i>
					<i className="fas fa-times">{times}</i>
				</button>
			</div>
			
		</div>
	);
}
