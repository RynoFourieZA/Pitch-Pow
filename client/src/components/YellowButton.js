import { Link } from "react-router-dom";

const YellowButton = ({ href, text }) => (
	<Link to={href}>
		<button className="yellowButton">{text}</button>
	</Link>
);

export default YellowButton;
