import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const Questions_New = () => {
	const [data, setData] = useState([]);
	const [answer, setAnswer] = useState([]);
	
	async function getNewQuestions() {
		try {
			const response = await fetch("/api/questions", {
				method: "GET",
				headers: { token: sessionStorage.token },
			});

			const parseRes = await response.json();
			const newData = await parseRes.filter(
				(item) => item.pitch_type_name === "New"
			);
			// "Business Description"
			const getBusinessDescription = newData
				.filter((questions) => questions.name === "Business Description")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAdd = getBusinessDescription.map((item) => item);
			const obj1 = [
				{
					"Business Description": propertyAdd.map((item) => item),
				},
			];

			// "Innovation"
			const getInnovation = newData
				.filter((questions) => questions.name === "Innovation")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddInnovation = getInnovation.map((item) => item);
			const obj2 = [
				{
					Innovation: propertyAddInnovation.map((item) => item),
				},
			];

			// Market Analysis
			const getMA = newData
				.filter((questions) => questions.name === "Market Analysis")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddMA = getMA.map((item) => item);
			const obj3 = [
				{
					"Market Analysis": propertyAddMA.map((item) => item),
				},
			];

			// Product or Service Analysis
			const getPSA = newData
				.filter((questions) => questions.name === "Product or Service Analysis")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddPSA = getPSA.map((item) => item);
			const obj4 = [
				{
					"Product or Service Analysis": propertyAddPSA.map((item) => item),
				},
			];

			// Competition
			const getCompetition = newData
				.filter((questions) => questions.name === "Competition")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddCompetition = getCompetition.map((item) => item);
			const obj5 = [
				{
					Competition: propertyAddCompetition.map((item) => item),
				},
			];

			// Marketing Strategy
			const getMS = newData
				.filter((questions) => questions.name === "Marketing Strategy")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddMS = getMS.map((item) => item);
			const obj6 = [
				{
					"Marketing Strategy": propertyAddMS.map((item) => item),
				},
			];

			// Operations
			const getOperations = newData
				.filter((questions) => questions.name === "Operations")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddOperations = getOperations.map((item) => item);
			const obj7 = [
				{
					Operations: propertyAddOperations.map((item) => item),
				},
			];

			// Finances
			const getFinances = newData
				.filter((questions) => questions.name === "Finances")
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddFinances = getFinances.map((item) => item);
			const obj8 = [
				{
					Finances: propertyAddFinances.map((item) => item),
				},
			];

			// Management/Technical complexity
			const getMTc = newData
				.filter(
					(questions) => questions.name === "Management/Technical complexity"
				)
				.map((question) => {
					delete question.name;
					return question;
				});
			const propertyAddMTc = getMTc.map((item) => item);
			const obj9 = [
				{
					"Management/Technical complexity": propertyAddMTc.map((item) => item),
				},
			];

			const allTheObjects = [
				...obj1,
				...obj2,
				...obj3,
				...obj4,
				...obj5,
				...obj6,
				...obj7,
				...obj8,
				...obj9,
			];
			setData(allTheObjects);
		} catch (e) {
			console.error(e.message);
		}
	}

	async function getAnswers() {
		try {
			const response = await fetch("/api/answers", {
				method: "GET",
				headers: { token: sessionStorage.token },
			});

			const parseRes = await response.json();
			console.log("Hi I am here, ParseRes: ", parseRes);
			setAnswer(parseRes);
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		(async () => await getNewQuestions())();
		(async () => await getAnswers())();
	}, []);


	

	return (
		<div className="container-accordion">
			{data.map((property, index) => (
				<div key={index} className="accordion-box">
					<Accordion property={property} />
				</div>
			))}
			<Link to="/dashboard/step3">
				<div className="text-center top">
					<button
						className="yellowButton submit"
						// onClick={ submitForReview }
						>
						Submit for Review
					</button>
				</div>
			</Link>
		</div>
	);
};

export default Questions_New;
