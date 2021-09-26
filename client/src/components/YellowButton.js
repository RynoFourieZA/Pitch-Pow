import { Link } from "react-router-dom";

const BlueButton = ({ href, text }) => (
	<Link to={href}>
		<button className="yellowButton">{text}</button>
	</Link>
);

export default BlueButton;
