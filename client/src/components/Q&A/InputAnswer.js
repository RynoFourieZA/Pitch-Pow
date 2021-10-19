import React, { useState, useEffect } from "react";
import "../../assets/css/accordion.css";

const InputAnswer = ({ item }) => {
    const [string, setString] = useState("");
	const [questions, setQuestions] = useState(item.id);


	// Post for answer
	const onSubmitNewForm = async (e) => {
		e.preventDefault();

        try {

            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("token", sessionStorage.token);
            const body = { string, question: questions};

            const response = await fetch("/api/answers", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body),
            });

            const parseResponse = await response.json();
			setString(parseResponse.string);
			setQuestions(parseResponse.question);

        } catch (err) {
            console.log(err.message);
        }
    } 

	useEffect(() => {
		onSubmitNewForm;
	}, []);

	const onChange = (e) => {
		setString(e.target.value);
	};

	return (
		<>
			<input
				className="accordion-input container-accordion"
				placeholder="Type your answer here..."
				value={string}
				onChange={(e) => onChange(e)}
				required
			/>
			<div className="my-2">
				<button className="yellowButton" onClick={onSubmitNewForm}>
					Save
				</button>
			</div>
		</>
	);
}

export default InputAnswer;
