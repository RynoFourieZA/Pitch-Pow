import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.post("/pitch", async (req, res) => {
	try {
		const { student_no, string } = req.body;

		const student = await connectDb.query(
			"SELECT * FROM pitch WHERE student_no = $1",
			[student_no]
		);

		if (student.rows.length !== 0) {
			return res.status(401).send("You already created a pitch.");
		} else {
			connectDb
				.query("INSERT INTO pitch (student_no, pitch) VALUES ($1, $2)", [student_no, string])
				.then(() => {
                    return res.send("Pitch is created!");
                });
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

router.get("/pitch", async (req, res) => {
	try {
		const { student } = req.query;

		let query = "SELECT * FROM pitch";

		if(student){
			query = `SELECT id, student_no, pitch FROM pitch WHERE student_no = $1`;
		}

        connectDb
            .query(query, [student])
            .then(result => res.json(result.rows));
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
