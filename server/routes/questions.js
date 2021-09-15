import { Router } from "express";
import connectDb from "../db";

const router = new Router();

// The route takes a query of type which checks the question_type and return the question type (new or existing question template).
router.get("/questions", async (req, res) => {
	try {
		const { type } = req.query;
		console.log(req.query);

		let query = "SELECT * FROM pitch_questions";

		if (type) {
			query = `SELECT * FROM pitch_questions WHERE question_type = ${type}`;
		}

		connectDb
			.query(query)
			.then((result) => res.json(result.rows));
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

//NB!!! After MVP is created questions must be able to be updated.

module.exports = router;
