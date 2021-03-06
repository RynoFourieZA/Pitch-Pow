import React, { useState, useEffect } from "react";
//Assets
import noSubmission from "../../assets/images/pitch-submission.png";
//Components
import YellowButton from "../YellowButton";
import PaginationMentor from "../mentor/PaginationMentor";
import InputComment from "../mentor/Comments/InputComment";
import SubmitComment from "../mentor/Comments/SubmitComment";

const ListAnswers = () => {
	const [allQuestionsAndAnswers, setAllQuestionsAndAnswers] = useState([]);
	const [userQuestionAndAnswer, setUserQuestionAndAnswer] = useState([]);
	// const [student, setStudent] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [questionPerPage] = useState(2);

	// Get current questions
	const indexOfLastQuestion = currentPage * questionPerPage;
	const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
	const currentQuestions = allQuestionsAndAnswers.slice(
		indexOfFirstQuestion,
		indexOfLastQuestion
	);

	const getProfile = async () => {
		try {
			const res = await fetch("/api/answers/all", {
				method: "GET",
				headers: { jwt_token: sessionStorage.token },
			});

			const parseData = await res.json();
			// console.log();List
			console.log("list :", parseData);
			setAllQuestionsAndAnswers(parseData);
			setUserQuestionAndAnswer(parseData[0].created_by);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	console.log("test: ", allQuestionsAndAnswers);

	return (
		<div>
			{allQuestionsAndAnswers.length > 0 ? (
				<div className="container py-5">
					<div>
						<h1 className="heading pb-2">
							{userQuestionAndAnswer}'s Pitch Submissions
						</h1>
						<span className="underline"></span>
					</div>
					{allQuestionsAndAnswers.map((pitch, index) => (
						<div className="pitchCard" key={index}>
							<div>
								<h5 className="dashH5 " width="200px">{pitch.questions}</h5>
								<p>{pitch.answer}</p>
							</div>
							<div>
								<div className="mentors-comment">
									<h5 className="dashH5 mentors-comment">Comment</h5>
									<InputComment pitch={pitch} />
								</div>
							</div>
						</div>
					))}
					<div className="mentors-comment">
						<h5 className="dashH5 mentors-comment">General comment</h5>
						<SubmitComment />
					</div>
					{/* <InputComment /> */}
					<PaginationMentor
						questionPerPage={questionPerPage}
						totalQuestions={allQuestionsAndAnswers.length}
						paginate={paginate}
					/>
				</div>
			) : (
				<div className="container py-5">
					<div>
						<h1 className="heading pb-2">Submissions</h1>
						<span className="underline"></span>
					</div>

					<div className="text-center">
						<div className="text-center pb-3">
							<img src={noSubmission} className="img-fluid" width="500px" />
							<h4 className="dashH4">No active pitch submissions.</h4>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ListAnswers;
