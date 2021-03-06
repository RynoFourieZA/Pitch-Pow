import { Router } from "express";
import connectDb from "../db";
import parseJwt from "../utils/tokenID";
import date from "../utils/date";
import authorization from "../middleware/authorization";

const router = new Router();

router.post("/answers", authorization, async (req, res) => {
	try {
		const { string, question } = req.body;
		const token = req.header("token");

		const userID = await parseJwt(token).user;

		const user = await connectDb.query(
			"SELECT name, student_number FROM users WHERE id = $1",
			[userID]
		);

		const user_name = await user.rows[0].name;
		const student_no = await user.rows[0].student_number;

		connectDb
			.query(
				"INSERT INTO answers (answer, question_id, users_id, student_number, created_by, created_date) VALUES ($1, $2, $3, $4, $5, $6)",
				[string, question, userID, student_no, user_name, date]
			)
			.then(() => res.send("Your answer has been saved."));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/answers/all", async (_, res) => {
	try {
		connectDb
			.query(
				"SELECT answers.created_by, answers.student_number, questions.questions, answers.answer, answers.id FROM answers INNER JOIN questions ON answers.question_id = questions.id ORDER By student_number"
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/answers", authorization, async (req, res) => {
	try {
		connectDb
			.query(
				"SELECT answers.created_by, answers.student_number, questions.questions, answers.answer, answers.created_date  FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE users_id = $1",
				[req.user]
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/answers/all", async (req, res) => {
	try {
		connectDb
			.query(
				"SELECT answers.created_by, answers.student_number, questions.questions, answers.answer FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE users_id = $1",
				[req.user]
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.put("/answers", authorization, async (req, res) => {
	try {
		const { string, id } = req.body;

		const token = req.header("token");

		const userID = await parseJwt(token).user;

		const user = await connectDb.query(
			"SELECT name, student_number FROM users WHERE id = $1",
			[userID]
		);

		const user_name = await user.rows[0].name;
		const student_no = await user.rows[0].student_number;

		connectDb
			.query(
				"UPDATE answers SET answer = $1, modified_by = $2, modified_date = $3 WHERE question_id = $4 AND student_number = $5",
				[string, user_name, date, id, student_no]
			)
			.then(() => res.send("Your answer was updated."));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.put("/answers/delete", authorization, async (req, res) => {
	try {
		const token = req.header("token");
		const userID = await parseJwt(token).user;

		const user_name = await user.rows[0].name;

		connectDb
			.query(
				"Update users SET is_delete = true modified_by = $1, modified_date = $2 WHERE id = $3",
				[user_name, date, userID]
			)
			.then(() => res.send("User has been deleted."));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.put("/answers/restore", authorization, async (req, res) => {
	try {
		const token = req.header("token");
		const userID = await parseJwt(token).user;

		const user_name = await user.rows[0].name;

		connectDb
			.query(
				"Update users SET is_delete = false modified_by = $1, modified_date = $2 WHERE id = $3",
				[user_name, date, userID]
			)
			.then(() => res.send("User has been deleted."));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;