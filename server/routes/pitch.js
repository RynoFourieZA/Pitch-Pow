import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.get("/pitch/:student_no", async (req, res) => {
    const student_no = req.body.student_no;

    try {
        connectDb
        .query("SELECT pitch FROM pitch WHERE student_no = $1", [student_no])
        .then((result) => {
            console.log(result.rows);
            return res.json(result.rows);
        });
    } catch (error) {
        console.error(error.message);
		res.status(500).send("Server error");
    }
});

module.exports = router;