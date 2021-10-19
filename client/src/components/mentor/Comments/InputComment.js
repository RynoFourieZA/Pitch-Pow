import React, { useState, useEffect } from "react";

const InputComment = () => {
	const [comment, setComment] = useState("");
	const [id, setId] = useState("");

	const onSubmitNewForm = async () => {
        try {

            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("token", sessionStorage.token);

            const body = { string, answer_id };

            const response = await fetch("/api/comments", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body),
            });

            const parseResponse = await response.json();
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
				Submit
			</button>
		</div>
	);
}

export default InputComment;
