import React, { useState } from "react";

function Answer({ answer, setAnswer, index }) {
	const onChange = (e) => {
		setAnswer(e.target.value);
	};

	return (
		<div key={index}>
			<textarea
				className="form-control"
				placeholder="Type your answer here..."
				value={answer}
				onChange={(e) => onChange(e)}
			/>
			<div className="my-2">
				<button className="yellowButton" id="sent">
					Sent
				</button>
			</div>
		</div>
	);
}

export default Answer;
