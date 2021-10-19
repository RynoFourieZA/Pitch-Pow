import connectDb from "../db";
import parseJwt from "../utils/tokenID";

const getUserDetails = async (req, res) => {
    try {
		const token = req.header("token");
		const user_id = parseJwt(token).user;

		const user = await connectDb.query("SELECT name, email, student_number FROM users WHERE id = $1", [user_id]);
		
		const user_name =  user.rows[0].name;
		const user_email =  user.rows[0].email;
		const student_no =  user.rows[0].student_number;

		return {
			user_id,
			user_email,
			user_name,
			student_no
		};

	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	}
}

module.exports = getUserDetails;