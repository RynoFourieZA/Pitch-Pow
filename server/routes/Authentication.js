const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
import connectDb from "../db";

//Signup / Register route
router.post("/signup", async (req, res) => {
    try {
        //1. Destructure the req.body {email, password, full name, role}
        const { full_name, email, password, roles } = req.body;

        //2. Check if user exists (if user exists throw error)
        //Check if student or mentor exists
        if (roles === 1){
            const user = await connectDb.query("SELECT * FROM students WHERE  email = $1", [email]);
            if(user.rows.length !== 0){
                return res.status(401).send("User Already Exists");
            }
        } else if (roles === 2){
            const user = await connectDb.query("SELECT * FROM mentors WHERE  email = $1", [email]);
            if(user.rows.length !== 0){
                return res.status(401).send("User Already Exists");
            }
        }

        //3. Bycrypt the user password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcryptPassword = await bcrypt.hash(password, salt);
        if(roles === 1) {
            const newUser = await connectDb.query("INSERT INTO students (full_name, email, password, roles) VALUES ($1, $2, $3 ,$4)", [full_name, email, bcryptPassword, roles]);

            //5. Generating out jwt token
            const token = jwtGenerator(newUser.rows[0].id);
            return res.json(token);

        } else if (roles === 2) {
            const mentorId = email.replace("@uwc.ac.za", "");
            const newUser = await connectDb.query("INSERT INTO mentors (id, full_name, email, password, roles) VALUES ($1, $2, $3 ,$4, $5)", [mentorId, full_name, bcryptPassword, roles]);

            //5. Generating out jwt token
            const token = jwtGenerator(newUser.rows[0].id);
            return res.json(token);
        }


    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;