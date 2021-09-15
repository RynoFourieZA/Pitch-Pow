import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.get("/questions", (req, res) => {
	
	connectDb
	.query("SELECT * FROM pitch_questions")
	.then((result) => res.json(result.rows))
	.catch((e) => console.error(e));
});

module.exports = router;

/*
questions.get("/new-questions", async (_, res) => {
    try {
        connectDb
			.query("SELECT * FROM pitch_questions WHERE question_type = 1")
			.then((result) => res.json(result.rows));
    } catch (error) {
        console.error(error.message);
		res.status(500).send("Server error");
    }
});

questions.get("/existing-questions", async (_, res) => {
	try {
		connectDb
			.query("SELECT * FROM pitch_questions WHERE question_type = 2")
			.then((result) => res.json(result.rows));
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});
*/ 