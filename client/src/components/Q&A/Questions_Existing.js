import React, { useState, useEffect } from "react";
// import FormControl from 'react-bootstrap/FormControl';
import Pagination from "./Pagination";
import Answer from "./Answer";

const Questions_Existing = () => {
	
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [questionPerPage] = useState(5);
    const [answer, setAnswer] = useState("");

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

	// Post for answer

	const onSubmitForm = async (e) => {
        e.preventDefault();

        try {

            const myHeaders = new Headers();
            myHeaders.append("COntent-Type", "application/json");
            myHeaders.append("jwt_token", localStorage.token);

            const body = { questions };
            const response = await fetch("http://localhost3100/api/answers_v2", {
                method: "POST",
                headers: myHeaders,
                body:JSON.stringify(body)
            });

            const parseResponse = await response.json();
			console.log(parseResponse);

        } catch (err) {
            console.log(err.message);
        }
    } 

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
			{currentQuestions.map((item, index) => (
				<div key={item.id}>
					<h3>{item.questions}</h3>
					<form className="form-control" onSubmit={onSubmitForm}>
						<Answer index={index} answer={answer} setAnswer={setAnswer} />
					</form>
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
