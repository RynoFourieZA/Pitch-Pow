import express from "express";
import morgan from "morgan";
import path from "path";
const cors = require("cors");

// Retrieving data from api file that is received from the DB.
import router from "./api";

// All middleware
import {
	configuredHelmet,
	httpsOnly,
	logErrors,
	pushStateRouting,
} from "./middleware";

// Creating a route value.
const apiRoot = "/api";
const staticDir = path.join(__dirname, "static");

const app = express();
app.use(cors());

// Config middleware
app.use(express.json());
app.use(configuredHelmet());
app.use(morgan("dev"));

if (app.get("env") === "production") {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

// Giving the value of "api" to router that is found in the api.js file
app.use(apiRoot, router);

// Routes
app.use("/auth", require("./routes/Authentication"));

// Config middleware
app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

app.use(logErrors());

export default app;
