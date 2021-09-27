const router = require("express").Router();
import connectDb from "../db";
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
    try {
        // res.json(req.user);
        const users = await connectDb.query("SELECT name, student_number, role_type_id FROM users WHERE id = $1", [req.user]);

        res.json(users.rows[0]);

    } catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
})

module.exports = router;