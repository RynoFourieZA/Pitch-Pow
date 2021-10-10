import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9",
};

const InputComment = (props) => {
	const { handleCommentsSubmit } = props;

	const stars = Array(5).fill(0);

	const [currentValue, setCurrentValue] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const [comment, setComment] = useState("");

	const handleClick = (value) => {
		setCurrentValue(value);
	};

	const handleMouseOver = (value) => {
		setHoverValue(value);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};

	return (
		<div style={styles.container}>
			<h2>Star Ratings For Pitch</h2>
			<div style={styles.stars}>
				{stars.map((_, index) => {
					return (
						<FaStar
							key={index}
							size={24}
							style={{
								marginRight: 10,
								cursor: "pointer",
							}}
							color={
								(hoverValue || currentValue) > index
									? colors.orange
									: colors.grey
							}
							onClick={() => handleClick(index + 1)}
							onMouseOver={() => handleMouseOver(index + 1)}
							onMouseLeave={() => handleMouseLeave(index + 1)}
						/>
					);
				})}
			</div>
			<textarea
				name="comment"
				value={comment}
				className="form-control"
				placeholder="What's your feedback"
				style={styles.textarea}
				onChange={(e) => setComment(e.target.value)}
			/>
			<button
				style={styles.button}
				onClick={(e) => {
					handleCommentsSubmit(comment);
					setComment("");
				}}
			>
				Submit
			</button>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	textarea: {
		border: "1px solid #a9a9a9",
		borderRadius: 5,
		width: 300,
		margin: "20px 0",
		minHeight: 100,
		padding: 10,
	},
	button: {
		border: "1px solid #a9a9a9",
		borderRadius: 5,
		width: 300,
		padding: 10,
	},
};

export default InputComment;
