import React, { useState } from "react";

function WriteComments(props) {
	const { handleCommentsSubmit } = props;

	const [comment, setComment] = useState("");

	return (
		<div>
			<div className="card mt-4 mb-3">
				<div className="card-header">
					<strong>Comments</strong>
				</div>
				<div className="card-body">
					<textarea
						name="comment"
						value={comment}
						className="form-control"
						placeholder="Add a new comment"
						onChange={(e) => setComment(e.target.value)}
					></textarea>
				</div>
			</div>
			<div>
				<button
					className="btn btn-primary mr-3"
					onClick={(e) => {
						handleCommentsSubmit(comment);
						setComment("");
					}}
				></button>
			</div>
		</div>
	);
}

export default WriteComments;
