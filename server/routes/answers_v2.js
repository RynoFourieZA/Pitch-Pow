import { Router } from "express";
import connectDb from "../db";
import parseJwt from "../utils/tokenID";
import date from "../utils/date";

const router = new Router();

router.post("/answers_v2", async (req, res) => {
    try {
        const { string } = req.body;
        const token = req.header("token");

        const userID = await parseJwt(token).user;

        const user = await connectDb.query("SELECT name, student_number FROM users WHERE id = $1",[userID]);

		const user_name = await user.rows[0].name;
		const student_no = await user.rows[0].student_number;

        connectDb.query("INSERT INTO answers (answer, user_id, student_number, created_by, created_date) VALUES ($1, $2, $3, $4, $5)",[string, userID, student_no, user_name, date])
        .then(() => res.send("Your answer has been saved."));
    } catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;