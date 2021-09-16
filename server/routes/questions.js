import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.post("/questions", async (req, res) => {
	try {
		const { column, type, value } = req.body;

		const query = `INSERT INTO pitch_questions (question_type, ${column}) VALUES ($1, $2)`;

		connectDb
			.query(query, [type, value])
			.then(() => res.send(`Question was inserted`));
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

router.get("/questions", async (req, res) => {
	try {
		const { id, column, type } = req.query;
		console.log(req.query);

		let query = "SELECT * FROM pitch_questions";

		if (type) {
			query = `SELECT * FROM pitch_questions WHERE question_type = ${type}`;
		}

		if (column) {
			query = `SELECT id, ${column} FROM pitch_questions`;
		}

		if (id) {
			query = `SELECT * FROM pitch_questions WHERE id = ${id}`;
		}

		if(column && type) {
			query = `SELECT id, ${column} from pitch_questions WHERE question_type = ${type}`;
		}

		if(column && id) {
			query = `SELECT ${column} from pitch_questions WHERE id = ${id}`;
		}

		connectDb
			.query(query)
			.then((result) => res.json(result.rows));
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
