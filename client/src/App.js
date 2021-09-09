//React Router
import { Route, Switch } from "react-router-dom";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/_global.css";
import "./assets/css/_responsive.css";
//React Components
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";

const App = () => (
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
	</Switch>
);

export default App;
