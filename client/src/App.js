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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SideMenu, { menuItems } from "./components/SideMenu";

toast.configure();

// const Dashboard1 = () => <h1>Dashboard</h1>;
// const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
// const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
// const Content2 = () => <h1>Content2</h1>;
// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;
// const Design2 = () => <h1>Design 2</h1>;

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [id, setId] = useState("");
	// const [inactive, setInactive] = useState(false);

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


	async function getId() {
		try {
			const response = await fetch("http://localhost:3100/api/dashboard/", {
				method: "GET",
				headers: { token: localStorage.token },
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
		<div>
		<Switch>
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
		</div>
	);
};

export default App;
