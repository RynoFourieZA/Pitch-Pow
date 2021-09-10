import { Router } from "express";

import connectDb from "./db";

const router = new Router();

router.get("/", (req, res) => {
	connectDb
		.query("SELECT * FROM test_table")
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});

export default router;
