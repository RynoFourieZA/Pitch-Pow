const router = require("express").Router();
import connectDb from "../db";
const authorization = require("../middleware/authorization");

router.get("/dashboard", authorization, async (req, res) => {
    try {
        const users = await connectDb.query("SELECT name, student_number, role_type_id FROM users WHERE id = $1", [req.user]);

        res.json(users.rows[0]);

    } catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
})

router.get("/dashboard/profile", authorization, async (req, res) => {
	try {
		const users = await connectDb.query(
			"SELECT id, role_type_id, name, email, biography, student_number, created_date FROM users WHERE id = $1", [req.user]);
			res.json(users.rows[0]);
	} catch (e) {
		console.error(e.message);
		res.status(500).json("Server Error");
	}
});

router.put("/users/update-bio", authorization, async (req, res) => {
	try {
		const { stringBio, question } = req.body;
		const token = req.header("token");

		const userID = await parseJwt(token).user;

		const user = await connectDb.query("SELECT name, email FROM users WHERE id = $1", [userID]);

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

module.exports = router;