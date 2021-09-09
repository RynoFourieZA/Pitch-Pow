import React, { useState } from "react";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    function validate() {
        console.log(email + password);
    }
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
					<h1>Welcome back! Login to get started.</h1>
					<div className="form-group">
						<label htmlFor="email" className="text-info">Email</label><br />
						<input
							type="text"
							value={email}
							placeholder="Enter Username"
							name="username"
							className="form-control"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="text-info">Password</label><br />
						<input
							type="password"
							value={password}
							placeholder="Enter Password"
							name="password"
							className="form-control"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit" id="login" onClick={validate}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
