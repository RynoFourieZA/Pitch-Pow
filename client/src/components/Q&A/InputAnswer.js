import React, { useState, useEffect } from "react";

const InputAnswer = ({ questionEl }) => {
    const [string, setString] = useState("");
	// const [question, setQuestion] = useState(questionEl.id);

	// Post for answer

	const onSubmitNewForm = async (e) => {
        e.preventDefault();

        try {

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("jwt_token", localStorage.token);

            const body = { string };
            const response = await fetch("http://localhost3100/api/answers_v2", {
                method: "POST",
                headers: myHeaders,
                body:JSON.stringify(body)
            });

            const parseResponse = await response.json();
			console.log(parseResponse);
			setString(parseResponse);
			// setQuestion(parseResponse)


        } catch (err) {
            console.log(err.message);
        }
    } 
	const onChange = (e) => {
		setString(e.target.value);
	};

	return (
			<form className="form-control" onSubmit={onSubmitNewForm}>
				<h3>{questionEl.questions}</h3>
				<textarea
					className="form-control"
					placeholder="Type your answer here..."
					value={string}
					onChange={(e) => onChange(e)}
				/>
				<div className="my-2">
					<button className="yellowButton">
						Sent
					</button>
				</div>
			</form>
	);
}

export default InputAnswer;
