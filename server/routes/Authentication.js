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
        if (roles === "student"){
            const user = await connectDb.query("SELECT * FROM students WHERE  email = $1", [email]);
            if(user.rows.length !== 0){
                return res.status(401).send("User Already Exists");
            }
        } else if (roles === "mentor"){
            const user = await connectDb.query("SELECT * FROM mentors WHERE  email = $1", [email]);
            if(user.rows.length !== 0){
                return res.status(401).send("User Already Exists");
            }
        }

        //3. Bycrypt the user password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcryptPassword = await bcrypt.hash(password, salt);
        //Add user to the database (mentor or student)
        const student_id = email.replace("@myuwc.ac.za", "");

        if (roles === "student") {
            const newUser = await connectDb.query(
                "INSERT INTO students (id, full_name, email, password, roles) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [student_id, full_name, email, bcryptPassword, roles]
            );

            //5. Generating our jwt token
            const token = jwtGenerator(newUser.rows[0].id);
            return res.json(token);

        } else if (roles === "mentor") {
            const newUser = await connectDb.query(
                "INSERT INTO mentors (full_name, email, password, roles) VALUES ($1, $2, $3, $4) RETURNING *",
                [full_name, email, bcryptPassword, roles]
            );

            //5. Generating out jwt token
            const token = jwtGenerator(newUser.rows[0].id);
            return res.json(token);
        }

    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;
        
        const student = await connectDb.query("SELECT * FROM students WHERE email = $1", [email]);

        const mentor = await connectDb.query("SELECT * FROM mentors WHERE email = $1", [email]);
        
        
        const validStudentPassword = await bcrypt.compare(
            password, student.rows[0].password
            )

            const validMentorPassword = await bcrypt.compare(
                password, mentor.rows[0].password
            )
            
            if (student.rows.length === 0 || !validStudentPassword) {
    
                return res.status(401).json("Password or Email is incorrect1"); 

            } 

            if (student.rows.length > 0) {
                const studentToken = jwtGenerator(student.rows[0].id);

                return res.json({studentToken});
            }
            
            if(mentor.rows.length === 0 || !validMentorPassword) {

                return res.status(401).json("Password or Email is incorrect2"); 

            }

            if (mentor.rows.length > 0) {
                const mentorToken = jwtGenerator(mentor.rows[0].id);
               return res.json({mentorToken});
                
            }


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    };
});

module.exports = router;