import { Router } from "express";
import connectDb from "../db";

// For MVP
// Create
// Readable
// Update
// Delete

const router = new Router();

router.post("/pitch", async (req, res) => {
	try {
		const { student_no, pitch } = req.body;

		const student = await connectDb.query(
			"SELECT * FROM pitch WHERE student_no = $1",
			[student_no]
		);

		if (student.rows.length !== 0) {
			return res.status(401).send("Pitch already created by the user.");
		} else {
			connectDb
				.query("INSERT INTO pitch (student_no, pitch) VALUES ($1, $2)", [student_no, pitch])
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
		let query = "SELECT * FROM pitch";

        connectDb
            .query(query)
            .then(result => res.json(result.rows));
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;

// SELECT pitch FROM pitch WHERE student_no = $1
