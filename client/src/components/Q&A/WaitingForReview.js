import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import submission from "../../assets/images/pitch-submission.png";
import laptop from "../../assets/images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import "../../assets/css/waiting-for-review.css";

const WaitingForReview = () => {
	const [mentor, setMentor] = useState([]);
	const [commentLength, setCommentLength] = useState("")

	async function getComments() {
		try {
			const response = await fetch("/api/comments/all", {
				method: "GET",
				headers: { token: sessionStorage.token },
			});

			const parseRes = await response.json();
			console.log("Mentor: ", parseRes);
			const last_element = parseRes[parseRes.length - 1]
			console.log(last_element);
			setMentor(last_element);
			setCommentLength(last_element.comment.length);
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		// (async () => await getAnswers())();
		(async () => await getComments())();
	}, []);

	console.log("t: ",commentLength);

	return ( commentLength > 10 ? 
		<section className="rightColumn step4">
			<div className="container py-5" style={{ padding: "10px" }}>
				<div className="display">
					<div>
						<h1 className="heading pb-2">Status</h1>
						<span className="underline"></span>
					</div>
					<div>
						<h1 className="heading pb-2">Comments</h1>
						<span className="underline"></span>
						<h5 className="heading pb-2">{mentor.created_by}</h5>
						<p>{mentor.comment}</p>
					</div>
				</div>

				<div className="container" width="1000px">
					<div className="waiting-for-review">
						<Link to="/dashboard/step2">
							<div>
								<div className="bizStageBlock text-center">
									<img src={submission} className="img-fluid" width="400px" />
									<p>View Pitch</p>
								</div>
							</div>
						</Link>
						<div>
							<div>
								<h3>Status: </h3>
								<h5>Received Review</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="card">
                        <div className="card-header animated-bg" id="header">
                            <img src={laptop} alt="image of a laptop"/>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title animated-bg animated-bg-text" id="title">Lorem Ipsum is simply dummy text</h3>
                            <p className="card-excerpt" id="excerpt"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            <span className="animated-bg animated-bg-text">&nbsp;</span>
                            <span className="animated-bg animated-bg-text">&nbsp;</span>
                            <span className="animated-bg animated-bg-text">&nbsp;</span>
                            </p>
                            <div className="author">
                                <div className="profile-img animated-bg" id="profile_img">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="random images" />
                                </div>
                                <div className="author-info">
                                    <strong className="animated-bg animated-bg-text" id="name"> John Doe</strong>
                                    <small className="animated-bg animated-bg-text" id="name"> Oct 20, 2021</small>
                                </div>
                            </div>
                        </div>
                    </div> */}
		</section>
 : 
		<section className="rightColumn step4">
			<div className="container py-5" style={{ padding: "10px" }}>
				<div className="display">
					<div>
						<h1 className="heading pb-2">Status</h1>
						<span className="underline"></span>
					</div>
				</div>

				<div className="container" width="1000px">
					<div className="waiting-for-review">
						<Link to="/dashboard/step2">
							<div>
								<div className="bizStageBlock text-center">
									<img src={submission} className="img-fluid" width="400px" />
									<p>View Pitch</p>
								</div>
							</div>
						</Link>
						<div>
							<div>
								<h3>Status: </h3>
								<h5>Waiting for Review</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="card">
                        <div className="card-header animated-bg" id="header">
                            <img src={laptop} alt="image of a laptop"/>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title animated-bg animated-bg-text" id="title">Lorem Ipsum is simply dummy text</h3>
                            <p className="card-excerpt" id="excerpt"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            <span className="animated-bg animated-bg-text">&nbsp;</span>
                            <span className="animated-bg animated-bg-text">&nbsp;</span>
                            <span className="animated-bg animated-bg-text">&nbsp;</span>
                            </p>
                            <div className="author">
                                <div className="profile-img animated-bg" id="profile_img">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="random images" />
                                </div>
                                <div className="author-info">
                                    <strong className="animated-bg animated-bg-text" id="name"> John Doe</strong>
                                    <small className="animated-bg animated-bg-text" id="name"> Oct 20, 2021</small>
                                </div>
                            </div>
                        </div>
                    </div> */}
		</section>
	);
};

export default WaitingForReview;
