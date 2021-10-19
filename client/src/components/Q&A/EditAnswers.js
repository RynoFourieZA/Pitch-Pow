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
            myHeaders.append("token", sessionStorage.token);
            const body = { string, question: questions};

            const response = await fetch("/api/answers_v2", {
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

	const onChange = (e) => {
		setString(e.target.value);
	};

	function finished() {
		alert("Your pitch has been sent to mentor for review");
	};

	return (
			<form className="form-control" onSubmit={onSubmitNewForm} >
				<h3>{questionEl.questions}</h3>
				<textarea
					className="form-control"
					placeholder="Type your answer here..."
					value={string}
					onChange={(e) => onChange(e)}
					required
				/>
				<div className="my-2">
					<button className="yellowButton" onClick={finished}>
						Submit
					</button>
				</div>
			</form>
	);
}

export default EditAnswers
