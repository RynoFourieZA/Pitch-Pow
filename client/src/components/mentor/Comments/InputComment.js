import React, { useState, useEffect } from "react";

const InputComment = ({ pitch }) => {
	const [comment, setComment] = useState("");
	const [id, setId] = useState(pitch.id);
	console.log("pitch: ", id);

	const onSubmitNewForm = async () => {
        try {

            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("token", sessionStorage.token);

            const body = { string: comment, answer_id: id };

            const response = await fetch("/api/comments", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body),
            });

            const parseResponse = await response.json();
			console.log("Emma", parseResponse);
			setComment(parseResponse.string);
			setId(parseResponse.answer_id);

        } catch (err) {
            console.log(err.message);
        }
    } 

	const onChange = (e) => {
		setString(e.target.value);
	};

	return (
		<div style={styles.container}>
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
				}}
			>
				Save
			</button>
		</div>
	);
}

const styles = {
	container: {
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center"
	},
	stars: {
	  display: "flex",
	  flexDirection: "row",
	},
	textarea: {
	  border: "1px solid #a9a9a9",
	  borderRadius: 5,
	  padding: 10,
	  margin: "20px 0",
	  minHeight: 100,
	  width: 300
	},
	button: {
	  border: "1px solid #a9a9a9",
	  borderRadius: 5,
	  width: 300,
	  padding: 10,
	}
  
  };

export default InputComment;
