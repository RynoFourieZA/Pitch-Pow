const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator() {
    const payload = {
        user: id,
    };

    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "8hrs" });
}

module.exports = jwtGenerator;