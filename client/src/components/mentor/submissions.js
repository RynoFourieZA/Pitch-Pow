//React
import React, { useState, useEffect } from "react";
//Assets
import noSubmission from "../../assets/images/pitch-submission.png";
//Components
import YellowButton from "../YellowButton";
import PaginationMentor from "./PaginationMentor";

export default function Submissions({ pitchData }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [questionPerPage] = useState(2);

	// Get current questions
	const indexOfLastQuestion = currentPage * questionPerPage;
	const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
	const currentQuestions = pitchData.slice(
		indexOfFirstQuestion,
		indexOfLastQuestion
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<section className="rightColumn">
			{pitchData.length > 0 ? (
				<div className="container py-5">
					<div>
						<h1 className="heading pb-2">Submissions</h1>
						<span className="underline"></span>
					</div>
					{pitchData.map((pitch, index) => (
						<div className="pitchCard" key={index}>
							<div>
								<img src={noSubmission} alt="submission-card" width="200px" />
							</div>

							<div>
								<div>
									<h5>{pitch.name}</h5>
									<h6>Created by: {pitch.author}</h6>

									<YellowButton text={"Review Pitch"} />
								</div>
							</div>
						</div>
					))}
					<PaginationMentor
						questionPerPage={questionPerPage}
						totalQuestions={pitchData.length}
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
		</section>
	);
}
