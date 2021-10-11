import { Router } from "express";
import connectDb from "../db";
import parseJwt from "../utils/tokenID";
import date from "../utils/date";

const router = new Router();

router.post("/comments", async (req, res) => {
	try {
        const { string, answer_id } = req.body;
		const token = req.header("token");

		const userID = await parseJwt(token).user;

		const user = await connectDb.query("SELECT name, email FROM users WHERE id = $1", [userID]);

		const user_name = await user.rows[0].name;

        connectDb
            .query("INSERT INTO comments (comment, answer_id, users_id, created_by, created_date) VALUES ($1, $2, $3, $4, $5)", [string, answer_id, userID, user_name, date])
            .then(() => res.json("Your comment was submitted."))
	} catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.get("/comments", async (_, res) => {
	try {
		connectDb
			.query("SELECT id, comment, created_by FROM comments ORDER BY created_by")
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

router.get("/comments/search", async (req, res) => {
    try {
        const { name, id } = req.query;

        connectDb
            .query("SELECT comment FROM comments WHERE id = $1 AND name = $2", [id, name])
            .then((result) => res.json(result.rows));

    } catch (e) {
		console.error(e.message);
		res.status(500).json("Server error");
	}
});

module.exports = router;
