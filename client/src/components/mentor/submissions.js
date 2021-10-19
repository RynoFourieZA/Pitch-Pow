//React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Assets
import noSubmission from "../../assets/images/pitch-submission.png";
//Components
import YellowButton from "../YellowButton";
import PaginationMentor from "../mentor/PaginationMentor";
import ListAnswer from "../Q&A/ListAnswers";

export default function Submissions() {
	const [allQuestionsAndAnswers, setAllQuestionsAndAnswers] = useState([]);
	const [userQuestionAndAnswer, setUserQuestionAndAnswer] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [questionPerPage] = useState(2);

	// Get current questions
	const indexOfLastQuestion = currentPage * questionPerPage;
	const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;

	const getProfile = async () => {
		try {
			const res = await fetch("/api/answers/all", {
				method: "GET",
				headers: { jwt_token: sessionStorage.token },
			});

			const parseData = await res.json();
			setAllQuestionsAndAnswers(parseData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	const uniqUsers = [
		...allQuestionsAndAnswers
			.reduce((map, obj) => map.set(obj.student_number, obj), new Map())
			.values(),
	];

	const currentQuestions = uniqUsers.slice(
		indexOfFirstQuestion,
		indexOfLastQuestion
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<div>
			{uniqUsers.length > 0 ? (
				<div className="container py-5">
					<div>
						<h1 className="heading pb-2">Submissions</h1>
						<span className="underline"></span>
					</div>
					{uniqUsers.map((pitch, index) => (
						<div className="pitchCard" key={index}>
							<div>
								<img src={noSubmission} alt="submission-card" width="200px" />
							</div>

							<div>
								<div>
									<h5>Created by: {pitch.created_by}</h5>
									<Link
										to={`/dashboard/mentor/submission/review-pitch`}
										className="yellowButton"
									>
										Review Pitch
									</Link>
								</div>
							</div>
						</div>
					))}
					<PaginationMentor
						questionPerPage={questionPerPage}
						totalQuestions={uniqUsers.length}
						paginate={paginate}
					/>
					<YellowButton text={"View All Pitches"} />
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
}
