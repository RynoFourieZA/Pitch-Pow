const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
import connectDb from "../db";
const authorization = require("../middleware/authorization");
const validInfo = require("../middleware/validInfo");

//Signup / Register route
router.post("/signup", validInfo, async (req, res) => {
    try {
        //1. Destructure the req.body {email, password, full name, role}
        const { name, email, password, student_number, roles } = req.body;

        //2. Check if user exists (if user exists throw error)
        //Check if student or mentor exists
        if (roles === "student"){
            const user = await connectDb.query("SELECT * FROM users WHERE  email = $1", [email]);
            if(user.rows.length !== 0){
                return res.status(401).send("User Already Exists");
            }
        } else if (roles === "mentor"){
            const user = await connectDb.query("SELECT * FROM users WHERE  email = $1", [email]);
            if(user.rows.length !== 0){
                return res.status(401).send("User Already Exists");
            }
        }

        //3. Bcrypt the user password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcryptPassword = await bcrypt.hash(password, salt);
        //Add user to the database (mentor or student)
        // const student_id = email.replace("@myuwc.ac.za", "");
        
        if (roles === "student") {
            const newUser = await connectDb.query(
                "INSERT INTO users (name, email, password, student_number, roles) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [name, email, bcryptPassword, student_number, roles]
            );

            //5. Generating our jwt token
            const token = jwtGenerator(newUser.rows[0].id);
            return res.json({ token });

        } else if (roles === "mentor") {
            const newUser = await connectDb.query(
                "INSERT INTO users (name, email, password, roles) VALUES ($1, $2, $3, $4) RETURNING *",
                [name, email, bcryptPassword, roles]
            );

            //5. Generating out jwt token
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

        if (user.rows.length === 0) {
            return res.status(401).send("User Does Not Exist")
        }

        if (user.rows.length > 0 ) {
            const validPassword = await bcrypt.compare(password, user.rows[0].password);

            if (!validPassword) {
                return res.status(401).send("User Does Not Exist 1")
            }

            const token = jwtGenerator(user.rows[0].id)
            return res.json({ token });
        } 

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    };
});

router.get("/verify", async (re1, res) => {
    try {

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    };
});

module.exports = router;