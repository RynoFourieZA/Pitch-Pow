import { Router } from "express";
import connectDb from "../db";

const router = new Router();

router.post("/comments", async (req, res) => {
    try {
		const { string } = req.body;
		const token = req.header("token");

		function parseJwt(token) {
			let base64Url = token.split(".")[1];
			let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
			let jsonPayload = decodeURIComponent(atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            );

            return JSON.parse(jsonPayload);
		};

		if (token) {

            const user = parseJwt(token);
            console.log(user);
			connectDb
				.query("INSERT INTO comments (comments, createby) VALUES($1, $2)", [string, user])
				.then(() => res.send("Your comment was submitted"));
		}
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server error");
	};
});

module.exports = router;