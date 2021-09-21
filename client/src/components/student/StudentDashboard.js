import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faPuzzlePiece, faTrophy, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import YellowButton from '../YellowButton';

//
import profileImage from '../../assets/images/brad.png';

function StudentDashboard() {
	return (
		<main>
            <div className="row main">
                <div className="dashboardNav py-3 container col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <div>
                        <div className="text-center">
                            <img src={profileImage} alt="image-of-user" width="100px"/>
                            <p>Bradley Mubenga</p>
                        </div>

                        <div className="py-5">
                            <div className="text-start px-5">
                                <ul>
                                    <li>
                                        <NavLink to="/dashboard"><FontAwesomeIcon icon={faFileAlt} /> My Pitch</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/resources"><FontAwesomeIcon icon={faPuzzlePiece} /> Resources</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/competitions"><FontAwesomeIcon icon={faTrophy} /> Competitions</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/myprofile"><FontAwesomeIcon icon={faUserCircle} /> My Profile</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <YellowButton href={"/logout"} text={"Logout"}/>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <h1>PITCH</h1>
                </div>
            </div>
		</main>
	);
}

export default StudentDashboard;