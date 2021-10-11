import React, { useState, useEffect } from "react";
// import FormControl from 'react-bootstrap/FormControl';
import Pagination from "./Pagination";
import InputAnswer from "./InputAnswer";

const Questions_Existing = () => {
	
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [questionPerPage] = useState(5);

	// Get for questions

	async function getQuestions() {
		try {
			const response = await fetch("http://localhost:3100/api/questions", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
			const newData = parseRes.filter(
				(item) => item.pitch_type_name === "Existing"
			);
			console.log(newData);
			setData(parseRes);
			console.log(parseRes);
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		(async () => await getQuestions())();
	}, []);

	

	// Get current questions
	const indexOfLastQuestion = currentPage * questionPerPage;
	const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
	const currentQuestions = data.slice(
		indexOfFirstQuestion,
		indexOfLastQuestion
	);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="container mt-3">
			{currentQuestions.map((questionEl) => (
				<div key={questionEl.id} className="questions-answer-box">
					<InputAnswer questionEl={questionEl} />
				</div>
			))}
			<Pagination
				questionPerPage={questionPerPage}
				totalQuestions={data.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default Questions_Existing;
