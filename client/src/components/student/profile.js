import React, { useEffect, useState } from "react";

export default function Profile() {
    const [role, SetRole] = useState("Student");
	const [studentName, setStudentName] = useState("");
    const [email,setEmail] = useState("");
	const [studentNumber, setStudentNumber] = useState("");
	const [biography, setBiography] = useState("");
    const [createDate, setCreateDate] = useState("");

	const [ origin, setOrigin ] = useState();

	useEffect(() => {
		if (window.location.origin === "http://localhost:3000") {
			setOrigin("http://localhost:3100/api/dashboard/profile")
		}

		else {
			setOrigin("https://pitch-pow.herokuapp.com/api/dashboard/profile")
		}
	}, [])

	async function getProfile() {
		try {
            
			const response = await fetch(
				origin,
				{
					method: "GET",
					headers: { token: localStorage.token },
				}
			);

			const parseRes = await response.json();
            console.log(parseRes);
            setStudentNumber(parseRes.student_number);
			setStudentName(parseRes.name);
            setEmail(parseRes.email)
            setBiography(parseRes.biography);
            setCreateDate(parseRes.create_date);


		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<section className="rightColumn">
			<div className="container py-5">
				<div>
					<h1 className="heading pb-2">My Profile</h1>
					<span className="underline"></span>
				</div>

				<div className="text-center">
					<div className="text-center pb-3">
						<h4 className="dashH4">Here we will have my profile.</h4>
                        <h4 className="dashH4">{role} Name: {studentName}</h4>
                        <h4 className="dashH4">{role} Email: {email}</h4>
                        <h4 className="dashH4">{role} number: {studentNumber}</h4>
                        <h4 className="dashH4">{role} biography: {biography}</h4>
                        <h4 className="dashH4">Date profile create: {createDate.substring(0,10)}</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
