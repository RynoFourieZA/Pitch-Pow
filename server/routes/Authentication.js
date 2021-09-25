const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
import connectDb from "../db";
const validUser = require("../middleware/validUser");

//Signup / Register route
router.post("/signup", async (req, res) => {
    try {
        //1. Destructure the req.body {email, password, full name, role}
        const { full_name, email, password, roles } = req.body;

        //2. Check if user exists (if user exists throw error)
        //Check if student or mentor exists

        const user = await connectDb.query("SELECT * FROM users WHERE  email = $1", [email]);

        if(user.rows.length !== 0){
            return res.status(401).send("User Already Exists");
        }

        //3. Bcrypt the user password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const role = await connectDb.query("SELECT id FROM role_type WHERE description = $1", [roles]);
        
        //Add user to the database (mentor or student)
        const student_id = email.replace("@myuwc.ac.za", "");

        if (role === 1) {
            const newUser = await connectDb.query("INSERT INTO users ( name, email, password, role_type_id, student_number) VALUES ($1, $2, $3, $4, $5) RETURNING *", [full_name, email, bcryptPassword, role, student_id]);

            //5. Generating our jwt token
            const studentToken = jwtGenerator(newUser.rows[0].id);
            return res.json({ studentToken });

        } else if (role === 2) {
            const newUser = await connectDb.query("INSERT INTO users (full_name, email, password, role_type_id) VALUES ($1, $2, $3, $4) RETURNING *", [full_name, email, bcryptPassword, roles]);

            //5. Generating out jwt token
            const mentorToken = jwtGenerator(newUser.rows[0].id);
            return res.json({ mentorToken });
        }

    } catch(e) {
        console.error(e.message);
        res.status(500).send("Server Error");
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await connectDb.query("SELECT * FROM users WHERE email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).send("User Does Not Exist")
        }

        if (user.rows.length > 0) {
            const validPassword = await bcrypt.compare(password, user.rows[0].password);

            if (!validPassword) {
                return res.status(401).send("User Does Not Exist OR Password Is Incorrect!!!")
            }

            const token = jwtGenerator(user.rows[0].id)
            return res.json({ token });
        } 

    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server Error")
    };
});

module.exports = router;