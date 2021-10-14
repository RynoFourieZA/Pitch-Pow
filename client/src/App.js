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
			{/* <Route path="*" render={() => <SideMenu onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}/>} /> */}
			{/* <Router path="*">
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        /> */}

        {/* <div className={`container ${inactive ? "inactive" : ""}`}> */}
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
            </>
          ))} */}

          {/* <Switch>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/content"}>
              <Content />
            </Route>
            <Route path={"/content/courses"}>
              <Courses />
            </Route>
            <Route path={"/content/videos"}>
              <Videos />
            </Route>
            <Route path={"/design"}>
              <Design />
            </Route>
            <Route exact path={"/content-2"}>
              <Content2 />
            </Route>
            <Route path={"/content-2/courses"}>
              <Courses2 />
            </Route>
            <Route path={"/content-2/videos"}>
              <Videos2 />
            </Route>
            <Route path={"/design-2"}>
              <Design2 />
            </Route>
          </Switch> */}
        {/* </div>
      </Router> */}

		</Switch>
		</div>
	);
};

export default App;
