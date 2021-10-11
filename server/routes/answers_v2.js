import { Router } from "express";
import connectDb from "../db";
import parseJwt from "../utils/tokenID";
import date from "../utils/date";

const router = new Router();

router.post("/answers_v2", async (req, res) => {
    try {
        const { string, question } = req.body;
        const token = req.header("token");

        const userID = await parseJwt(token).user;

        const user = await connectDb.query("SELECT name, student_number FROM users WHERE id = $1",[userID]);

		const user_name = await user.rows[0].name;
		const student_no = await user.rows[0].student_number;

        connectDb
            .query("INSERT INTO answers (answer, question_id, users_id, student_number, created_by, created_date) VALUES ($1, $2, $3, $4, $5, $6)",[string, question, userID, student_no, user_name, date])
            .then(() => res.json("Your answer has been saved."));
    } catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.get("/answers_v2", async (_, res) => {
    try {
        connectDb
			.query("SELECT answers.created_by, answers.student_number, questions.questions, answers.answer FROM answers INNER JOIN questions ON answers.question_id = questions.id ORDER By student_number")
			.then((result) => res.json(result.rows));
    } catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.get("/answers_v2/search", async (req, res) => {
    try {
        const { student } = req.query;

        connectDb
			.query("SELECT answers.created_by, answers.student_number, questions.questions,answers.answer FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE student_number = $1", [student])
			.then((result) => res.json(result.rows));
    } catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.put("/answers_v2", async (req, res) => {
    try {
        const { string, id } = req.body;

        const token = req.header("token");

		const userID = await parseJwt(token).user;

		const user = await connectDb.query("SELECT name, student_number FROM users WHERE id = $1", [userID]);

		const user_name = await user.rows[0].name;
		const student_no = await user.rows[0].student_number;

        connectDb
            .query("UPDATE answers SET answer = $1, modified_by = $2, modified_date = $3 WHERE question_id = $4 AND student_number = $5", [string, user_name, date, id, student_no])
            .then(() => res.json("Your answer was updated."));
    } catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.put("/answers_v2/delete", async (req, res) => {
	try {
		const token = req.header("token");
		const userID = await parseJwt(token).user;

		const user_name = await user.rows[0].name;

		connectDb
			.query(
				"Update users SET is_delete = true modified_by = $1, modified_date = $2 WHERE id = $3",
				[user_name, date, userID]
			)
			.then(() => res.json("User has been deleted."));
	} catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.put("/answers_v2/restore", async (req, res) => {
	try {
		const token = req.header("token");
		const userID = await parseJwt(token).user;

		const user_name = await user.rows[0].name;

		connectDb
			.query("Update users SET is_delete = false modified_by = $1, modified_date = $2 WHERE id = $3", [user_name, date, userID])
			.then(() => res.json("User has been deleted."));
	} catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

module.exports = router;