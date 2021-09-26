const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
import connectDb from "../db";
const authorization = require("../middleware/authorization");
const validInfo = require("../middleware/validInfo");

//Signup / Register route
router.post("/signup", validInfo, async (req, res) => {
    try {

		const { full_name, email, password, roles } = req.body;

		const user = await connectDb.query("SELECT * FROM users WHERE email = $1", [email]);

		if (user.rows.length !== 0) {
			return res.status(401).send("User Already Exists");
		};

		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const bcryptPassword = await bcrypt.hash(password, salt);

		const role = await connectDb.query("SELECT id FROM role_type WHERE role_name = $1", [roles]);

		const roleValue = role.rows[0].id;

		if (roleValue === 1) {
			const student_id = await email.replace("@myuwc.ac.za", "");

			const newUser = await connectDb.query("INSERT INTO users (role_type_id, name, email, password, student_number) VALUES ($1, $2, $3, $4, $5) RETURNING *", [roleValue, full_name, email, bcryptPassword, student_id]);
				
			const token = jwtGenerator(newUser.rows[0].id);
			return res.json({ token });
		} else if (roleValue === 2) {
			const newUser = await connectDb.query("INSERT INTO users (role_type_id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [roleValue, full_name, email, bcryptPassword]);

			const token = jwtGenerator(newUser.rows[0].id);
			return res.json({ token });
		}
	} catch(err) {
        console.error(err.message);
		res.status(500).send("Server Error");
    }
});

router.post("/login", validInfo, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await connectDb.query("SELECT * FROM users WHERE email = $1", [email]);

		const validStudentPassword = await bcrypt.compare(password, user.rows[0].password);

        if (user.rows.length === 0 || !validStudentPassword) {
			return res.status(401).send("User Or Password Does Not Exist");
		}

		const token = jwtGenerator(user.rows[0].id);
		res.json({ token });

    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server Error")
    };
});

router.get("/verify", authorization, async (_, res) => {
	try {
		res.json(true);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;