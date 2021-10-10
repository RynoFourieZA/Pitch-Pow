import React, { useState, useEffect} from "react";
import Pagination from "./Pagination";
import InputAnswer from "./InputAnswer";

const Questions_New = () => {
    const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [questionPerPage] = useState(5);

    async function getNewQuestions() {
		try {
			const response = await fetch("http://localhost:3100/api/questions", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
            console.log(parseRes);
            const newData = parseRes.filter(item => item.pitch_type_name === "New")
			setData(parseRes);

		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		(async () => await getNewQuestions())();
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
				<div key={questionEl.id}>
					<InputAnswer questionEl={questionEl}/>
					</div>
			))}
			<Pagination
				questionPerPage={questionPerPage}
				totalQuestions={data.length}
				paginate={paginate}
			/>
		</div>
    )
}

export default Questions_New;