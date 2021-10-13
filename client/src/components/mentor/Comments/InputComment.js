import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9",
};

const InputComment = () => {

	// const stars = Array(5).fill(0);

	// const [currentValue, setCurrentValue] = useState(0);
	// const [hoverValue, setHoverValue] = useState(undefined);
	const [comment, setComment] = useState("");
	const [id, setId] = useState("");


	const onSubmitNewForm = async () => {
        try {

            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("token", localStorage.token);
			console.log(myHeaders);
            const body = { string, answer_id };
			console.log(myHeaders);

			console.log(body);
            const response = await fetch("http://localhost:3100/api/comments", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body),
            });

            const parseResponse = await response.json();
			console.log('string',parseResponse);
			// setComment(parseResponse.string);
			// setId(parseResponse.answer_id);

        } catch (err) {
            console.log(err.message);
        }
    } 

	console.log(comment, id);
	const onChange = (e) => {
		setString(e.target.value);
	};

	// const handleClick = (value) => {
	// 	setCurrentValue(value);
	// };

	// const handleMouseOver = (value) => {
	// 	setHoverValue(value);
	// };

	// const handleMouseLeave = () => {
	// 	setHoverValue(undefined);
	// };

	return (
		<div style={styles.container}>
			{/* <h2>Star Ratings For Pitch</h2>
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
			</div> */}
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
					e.preventDefault();
					onSubmitNewForm();
					// setComment("");
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
