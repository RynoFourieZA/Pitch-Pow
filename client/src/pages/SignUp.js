import React, { useState, useEffect } from "react";

//CSS
import "../assets/css/authPages.css";

//Images
import logo from "../assets/images/pitch-pow-logo-white.png";
import ceiLogo from "../assets/images/cei-logo.png";

//Components
import AuthHeaderLogin from "../components/authHeaderLogIn";
import { toast } from "react-toastify";

const SignUp = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		full_name: "",
		email: "",
		password: "",
		roles: "Student",
	});

	const { full_name, email, password, roles } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { full_name, email, password, roles };
			const origin = "/api/signup";
			const response = await fetch(origin, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			if (parseRes.token) {
				sessionStorage.setItem("token", parseRes.token);

				setAuth(true);
				toast.success("Registered Successfully");
			} else {
				setAuth(false);
				toast.error(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<main className="loginPage">
			<div className="d-flex flex-row">
				<div className="sideImage  col-sm-12 col-md-12 col-lg-4 col-xl-4">
					<div className="text-center">
						<img src={logo} alt="pitch-pwo-logo" width="75%" />
					</div>
					<p className="about-text">
						Pitch Pow is a platform where students can journey with a team of
						mentors to assist with creating business pitches for both new ideas
						and existing businesses.
					</p>
				</div>

				<div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
					<AuthHeaderLogin />
					<div className="d-flex justify-content-center align-items-center">
						<div>
							<div className="text-center">
								<img src={ceiLogo} alt="cei-logo" width="200px" />
								<p className="pt-1">Welcome! Sign up to get started.</p>
							</div>

							<form className="d-flex flex-column" onSubmit={onSubmitForm}>
								<h6 className="mt-1 mb-0">Full Name</h6>
								<input
									className="input"
									type="text"
									id="full_name"
									name="full_name"
									value={full_name}
									onChange={(e) => onChange(e)}
									required
								/>

								<h6 className="mt-3 mb-0">Email</h6>
								<input
									className="input"
									type="text"
									id="email"
									name="email"
									value={email}
									onChange={(e) => onChange(e)}
									required
								/>

								<h6 className="mt-3 mb-0">Role</h6>
								<div>
									<select
										name="roles"
										id="roles"
										className="input"
										value={roles}
										onChange={(e) => onChange(e)}
										required
									>
										<option value="Student">Student</option>
										<option value="Mentor">Mentor</option>
									</select>
								</div>

								<h6 className="mt-3 mb-0">Password</h6>
								<input
									className="input"
									type="password"
									id="password"
									name="password"
									value={password}
									onChange={(e) => onChange(e)}
									required
								/>

								<div className="my-2">
									<button className="yellowButton">Sign up</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SignUp;
