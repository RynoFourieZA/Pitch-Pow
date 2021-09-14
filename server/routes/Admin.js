const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
import connectDb from "../db";

router.get("/admin", (req, res) => {
    
})