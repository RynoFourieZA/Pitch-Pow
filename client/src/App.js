//React Router
import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/_global.css";
import "./assets/css/_responsive.css";
//React Components
// import About from "./pages/About";
// import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MentorDashboard from "./components/mentor/MentorDashboard";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	async function isAuth() {
		try {
			const response = await fetch("http://localhost:3100/auth/verify", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();

			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		isAuth();
	}, []);

	return (
		<Switch>
			{/* THIS ROUTE IS FOR TESTING PURPOSES ONLY */}
			<Route path="/mentor-test">
				<MentorDashboard />
			</Route>

			<Route
				path="/signup"
				render={(props) =>
					!isAuthenticated ? (
						<SignUp {...props} setAuth={setAuth} />
					) : (
						<Redirect to="/login" />
					)
				}
			/>
			<Route
				path="/login"
				render={(props) =>
					!isAuthenticated ? (
						<LoginPage {...props} setAuth={setAuth} />
					) : (
						<Redirect to="/dashboard" />
					)
				}
			/>
			<Route
				path="/dashboard"
				render={(props) =>
					isAuthenticated ? (
						<Dashboard {...props} setAuth={setAuth} />
					) : (
						<Redirect to="/login" />
					)
				}
			/>

			<Route path="*" render={() => <h1>404 Route not found</h1>} />
		</Switch>
	);
};

export default App;
