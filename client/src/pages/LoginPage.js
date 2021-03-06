import React, { useState } from "react";
//CSS
import "../assets/css/authPages.css";
//Images
import logo from "../assets/images/pitch-pow-logo-white.png";
import ceiLogo from "../assets/images/cei-logo.png";
//Components
import AuthHeaderSignup from "../components/authHeaderSignup";
import showPwdImg from "../assets/images/show-password.svg";
import hidePwdImg from "../assets/images/hide-password.svg";
import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const { email, password } = inputs;
	const [isRevealPwd, setIsRevealPwd] = useState(false);

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };

			const response = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			if (parseRes.token) {
				sessionStorage.setItem("token", parseRes.token);

				setAuth(true);

				toast.success("login successfully!");
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
					<AuthHeaderSignup />
					<div className="d-flex justify-content-center align-items-center">
						<div>
							<div className="text-center">
								<img src={ceiLogo} alt="cei-logo" width="200px" />
								<p className="pt-1">Welcome! Sign up to get started.</p>
							</div>

							<form className="d-flex flex-column" onSubmit={onSubmitForm}>
								<h6 className="mt-3 mb-0">Email</h6>
								<input
									className="input"
									type="text"
									id="email"
									name="email"
									value={email}
									onChange={(e) => onChange(e)}
								/>

								<h6 className="mt-3 mb-0">Password</h6>
								<input
									className="input"
									type={isRevealPwd ? "text" : "password"}
									id="password"
									name="password"
									value={password}
									onChange={(e) => onChange(e)}
									required
								/>
								<img
									className="showhide"
									title={isRevealPwd ? "Hide password" : "Show password"}
									src={isRevealPwd ? showPwdImg : hidePwdImg}
									onClick={() => setIsRevealPwd((prevState) => !prevState)}
									width="25px"
								/>

								<div className="my-2">
									<button className="yellowButton" id="login">
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Login;
