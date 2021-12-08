//React Router
import React, { useState, useEffect } from "react";
import {
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/_global.css";
import "./assets/css/_responsive.css";
//React Components
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [id, setId] = useState("");

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	async function isAuth() {
		try {
			const response = await fetch("/api/verify", {
				method: "GET",
				headers: { token: sessionStorage.token },
			});

			const parseRes = await response.json();

			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (e) {
			console.error(e.message);
		}
	}

	async function getId() {
		try {
			const response = await fetch("/api/dashboard/", {
				method: "GET",
				headers: { token: sessionStorage.token },
			});

			const parseRes = await response.json();
			setId(parseRes.role_type_id);
			
		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		isAuth();
		getId();
	}, []);

	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
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
					) :( <Redirect to="/dashboard" />
					)}
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
