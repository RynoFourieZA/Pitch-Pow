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

        connectDb.query("INSERT INTO answers (answer, question_id, student_number, created_by, created_date) VALUES ($1, $2, $3, $4, $5)",[string, question, student_no, user_name, date])
        .then(() => res.send("Your answer has been saved."));
    } catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/answers_v2", async (_, res) => {
    try {
        connectDb
					.query("SELECT answers.created_by, answers.student_number, questions.questions, answers.answer FROM answers INNER JOIN questions ON answers.question_id = questions.id ORDER By student_number")
					.then((result) => res.json(result.rows));
    } catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
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
		res.status(500).send("Server error");
	}
});

module.exports = router;