import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState({
		values: "",
		showPassword: false,
	});

	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	function visibility() {
		return console.log("yes");
	}

    function validate(event) {
		event.preventDefault();

		if(email.includes("@uwc.ac.za") || email.includes("@myuwc.ac.za") && email.length > 3 && email.toLowerCase()) {
			setErrorEmail("");
			setEmail("");
			console.log(email);
		}else {
			setErrorEmail(`Email must contain "@uwc.ac.za" or "@myuwc.ac.za" and must be 8 letters long`);
		};

		if(password.length > 7 && password !== 12345678 ) {
			setErrorPassword("");
			setPassword("");
			console.log(password);
		}else {
			setErrorPassword("Password must be 8 numbers long");
		};
    }
	return (
		<form className="container">
			<div className="row justify-content-center">
				<div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
					{/* <img src="./"/> */}
					<h1>Welcome back! Login to get started.</h1>
					<div className="form-group">
						<label htmlFor="email" className="text-info">Email</label><br />
						<input
							type="text"
							value={email}
							placeholder="Enter Email"
							name="email"
							className="form-control"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<p>{errorEmail}</p>
					</div>
					<div className="form-group">
						<input className="text-info">Password</input><br />
						<input
							type="password"
							value={password}
							placeholder="Enter Password"
							name="password"
							className="form-control"

							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<p>{errorPassword}</p>
					</div>
					<button type="submit" id="login" className="form-control"  onClick={validate}>
						Login
					</button> <br />
					<Link to="/signup" id="link-signup">Register</Link>
				</div>
			</div>
		</form>
	);
};

export default LoginPage;
