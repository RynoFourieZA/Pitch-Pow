import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.post("/answers", async (req,res) => {
    try {
		const { string } = req.body;

		let query = "INSERT INTO answers (answer) VALUES ($1)";

		connectDb.query(query, [string])
        .then(() => res.send("Answer has been submitted"));

	} catch (e) {
        console.error(error.message);
		res.status(500).send("Server error");
    }
});

router.get("/answers", async (_, res) => {
    try {
        let query = "SELECT answer FROM answers WHERE isDelete = false";

        connectDb.query(query)
        .then(result => res.json(result.rows));

    } catch (e) {
        console.error(error.message);
		res.status(500).send("Server error");
    }
});

module.exports = router;