import React, { useEffect, useState } from "react";
import "../../assets/css/profile.css";
import profileImage from "../../assets/images/business-man_grey.png";

export default function Profile() {
    const [role, SetRole] = useState("Student");
	const [studentName, setStudentName] = useState("");
    const [email,setEmail] = useState("");
	const [studentNumber, setStudentNumber] = useState("");
	const [biography, setBiography] = useState("");
    const [createDate, setCreateDate] = useState("");

	async function getProfile() {
		try {
            
			const response = await fetch(
				"http://localhost:3100/api/dashboard/profile",
				{
					method: "GET",
					headers: { token: localStorage.token },
				}
			);

			const parseRes = await response.json();
			
            setStudentNumber(parseRes.student_number);
			setStudentName(parseRes.name);
            setEmail(parseRes.email)
            setBiography(parseRes.biography);
            setCreateDate(parseRes.created_date);


		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<section className="rightColumn">
			<div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={profileImage} alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                    {studentName}
                                    </h5>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="modal" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="button" type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style={{backgroundColor:"white"}}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Student Number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{studentNumber}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{studentName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Biography</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
										<div className="row">
                                            <div className="col-md-6">
                                                <label>Date profile create:</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{createDate.substring(0,10)}</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </form>           
        </div>
		</section>
	);
}
