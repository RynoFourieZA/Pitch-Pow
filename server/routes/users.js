import { Router } from "express";
import connectDb from "../db";
import parseJwt from "../utils/tokenID";
import date from "../utils/date";
const authorization = require("../middleware/authorization");
const bcrypt = require("bcrypt");

const router = new Router();

router.get("/users", authorization, async (_, res) => {
    try {
        connectDb
			.query("SELECT role_type.role_name, users.name, users.email, users.biography FROM users INNER JOIN role_type ON users.role_type_id = role_type.id WHERE is_delete = false ORDER BY name")
			.then(result => res.json(result.rows));
    } catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/users/all", authorization, async (_, res) => {
	try {
		connectDb
			.query(
				"SELECT role_type.role_name, users.name, users.email, users.student_number, users.biography, users.is_delete FROM users INNER JOIN role_type ON users.role_type_id = role_type.id ORDER BY name"
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/users/students", authorization, async (_, res) => {
	try {
		connectDb
			.query(
				"SELECT name, email, student_number, biography FROM users WHERE role_type_id = 1 AND is_delete = false ORDER BY name"
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/users/students/search", authorization, async (req, res) => {
	try {
		const { number } = req.query;
		connectDb
			.query(
				"SELECT name, email, student_number, biography FROM users WHERE  student_number = $1 AND confirm = true AND is_delete = false",
				[number]
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/users/mentors", authorization, async (_, res) => {
	try {
		connectDb
			.query(
				"SELECT name, email, biography FROM users WHERE role_type_id = 2 AND confirm = true AND is_delete = false ORDER BY name"
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.get("/users/mentors/search", authorization, async (req, res) => {
	try {
		const { email } = req.query;
		connectDb
			.query(
				"SELECT name, email, biography FROM users WHERE  email = $1 AND confirm = true AND is_delete = false",
				[email]
			)
			.then((result) => res.json(result.rows));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.put("/users/update-bio", authorization, async (req, res) => {
	try {
		const { stringBio } = req.body;
		const token = req.header("token");

		const userID = await parseJwt(token).user;

		const user = await connectDb.query(
			"SELECT name, email FROM users WHERE id = $1",
			[userID]
		);

		const user_name = await user.rows[0].name;
		const user_email = await user.rows[0].email;

		connectDb
			.query(
				"UPDATE users SET biography = $1, modified_by = $2, modified_date = $3 WHERE email = $4",
				[stringBio, user_name, date, user_email]
			)
			.then(() => res.send("Your biography was updated"));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.put("/users/update-password", authorization, async (req, res) => {
	try {
		const { userPassword, userPasswordTwo } = req.body;
		const token = req.header("token");

		const userID = await parseJwt(token).user;

		const user = await connectDb.query(
			"SELECT name, email FROM users WHERE id = $1",
			[userID]
		);

		const user_name = await user.rows[0].name;
		const user_email = await user.rows[0].email;

		if (userPassword !== userPasswordTwo) {
			return "Password does not match";
		} else {
			const saltRounds = 10;
			const salt = await bcrypt.genSalt(saltRounds);
			const bcryptPassword = await bcrypt.hash(userPassword, salt);

			connectDb
				.query(
					"UPDATE users SET password = $1, modified_by = $2, modified_date = $3 WHERE email = $4",
					[bcryptPassword, user_name, date, user_email]
				)
				.then(() => res.send("Your password was updated"));
		}
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

router.put("/users/delete", authorization, async (req, res) => {
	try {
		const token = req.header("token");
		const userID = await parseJwt(token).user;

		const user_name = await user.rows[0].name;

		connectDb
			.query(
				"Update users SET is_delete = true modified_by = $1, modified_date = $2 WHERE id = $3",
				[user_name, date, userID]
			)
			.then(() => res.send("User has been deleted."));
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;