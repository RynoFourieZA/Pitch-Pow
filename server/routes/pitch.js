import { Router } from "express";
import connectDb from "../db";
import parseJwt from "../utils/tokenID";
import date from "../utils/date";
import authorization from "../middleware/authorization";

const router = new Router();

router.post("/pitch", authorization, async (req, res) => {
    try {
        const { string } = req.body;
        const token = req.header("token");

		const user_id = await parseJwt(token).user;
        const user = await connectDb.query("SELECT name, student_number, email FROM users WHERE id = $1", [user_id]);
        const user_name = await user.rows[0].name;
        const student_no = await user.rows[0].student_number;
        const user_email = await user.rows[0].email;

        connectDb
            .query("INSERT INTO pitch (pitch, student_number, email, users_id, created_by, created_date) VALUES ($1, $2, $3, $4, $5, $6)",
			[string, student_no, user_email, user_id, user_name, date])
            .then(() => res.send("Your pitch has been sent for review, a mentor will get back to you as soon as it has been reviewed."));
    } catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.get("/pitch", authorization, async (_, res) => {
    try {
        connectDb
            .query("SELECT id, created_by, student_number, email, pitch FROM pitch")
            .then((result) => res.json(result.rows));
    } catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.get("/pitch", authorization, async (req, res) => {
	try {
        const { student_no } = req.query;
		connectDb
			.query("SELECT id, created_by, student_number, email, pitch FROM pitch WHERE student_number = $1", [student_no])
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

module.exports = router;
