import React from "react";
import { Link } from "react-router-dom";
import submission  from  "../../assets/images/pitch-submission.png";
import laptop  from  "../../assets/images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import "../../assets/css/waiting-for-review.css";


const WaitingForReview = () => {
	return (
        <section className="rightColumn step4">
            <div className="container py-5" style = {{padding:'10px'}}>
                <div>
                    <h1 className="heading pb-2">Waiting For Review</h1>
                    <span className="underline"></span>
                </div>

                <div className="test" width="600px">
                    <div 
                        className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center"
                    >
                        <Link to="/dashboard/step2">
                            <div>
                                <div
                                    className="bizStageBlock text-center"
                                >
                                    <img src={submission} className="img-fluid" width="400px"/>
                                    <p>View Pitch</p>
                                </div>
                            </div>
                        </Link>
                                <div className="waiting-for-review">
                                    <h3>Status: </h3>
                                    <h5>Waiting for Review</h5>
                                    <h3>Date Created: </h3>
                                    <h5>Waiting for Review</h5>

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
