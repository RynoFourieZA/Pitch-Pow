import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.post("/questions", async (req, res) => {
	try {
		const { column, type, value } = req.body;

		let query = `INSERT INTO pitch_questions (question_type, ${column}) VALUES ($1, $2)`;

		if (value.length === 0 || value.length < 10) {
			return res.status(400).send("Please fill in a value question or it's business template type.");
		};

		connectDb
			.query(query, [type, value])
			.then(() => res.send(`Question was inserted`));

	}catch (error) {
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

router.put("/questions", async (req, res) => {
	try {
		const { column, value, id } = req.body;

		let query = `UPDATE pitch_questions SET ${column} = $1 WHERE id = $2`;

		if (id.rows.length < 1) {
			return res.status(400).send("Please provide a valid question id.");
		};

		connectDb
			.query(query, [value, id])
			.then(() => res.send("The question was updated"));
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
