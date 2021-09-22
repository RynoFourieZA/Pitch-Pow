//React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/_global.css";
import "./assets/css/_responsive.css";
//React Components
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/about/this/site">
				<About />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
			<Route path="/login">
				<LoginPage />
			</Route>
			<Route path="/dashboard">
				<Dashboard />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default App;
