import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.get("/questions", async (req, res) => {
	try {
		const { type } = req.query;
		
		let query = `SELECT questions.questions, category_type.name, category_type.description, pitch_type.description FROM questions INNER JOIN category_type ON questions.category_type_id = category_type.id INNER JOIN pitch_type ON questions.pitch_type_id = pitch_type.id WHERE questions.isDelete = false AND questions.pitch_type_id = $1`;

		connectDb
		.query(query, [type])
		.then(result => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
/*"SELECT questions.questions, category_type.name, category_type.description, pitch_type.description FROM questions INNER JOIN category_type ON questions.category_type_id = category_type.id INNER JOIN pitch_type ON questions.pitch_type_id = pitch_type.id WHERE questions.isDelete = false"; */