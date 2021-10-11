import React from "react";


const EditAnswers = () => {
    const [string, setString] = useState("");
	const [questions, setQuestions] = useState(questionEl.id);

	// Post for answer

	const onSubmitNewForm = async (e) => {
        e.preventDefault();

        try {

            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("token", localStorage.token);
			console.log(myHeaders);
            const body = { string, question: questions};

			console.log(body);

            const response = await fetch("http://localhost:3100/api/answers_v2", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body),
            });

            const parseResponse = await response.json();
			console.log(parseResponse);
			setString(parseResponse.string);
			setQuestions(parseResponse.question);

        } catch (err) {
            console.log(err.message);
        }
    } 

	console.log(string, questions);
	const onChange = (e) => {
		setString(e.target.value);
	};

	return (
			<form className="form-control" onSubmit={onSubmitNewForm} >
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

export default EditAnswers
