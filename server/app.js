import express from "express";
import morgan from "morgan";
import path from "path";
const app = express();
const cors = require("cors");

// All middleware
import {
	configuredHelmet,
	httpsOnly,
	logErrors,
	pushStateRouting,
} from "./middleware/middleware";

// Creating a route value.
const apiRoot = "/api";
const staticDir = path.join(__dirname, "static");


// Config middleware
app.use(express.json());
app.use(configuredHelmet());
app.use(morgan("dev"));
app.use(cors());

if (app.get("env") === "production") {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

// Routes
app.use(apiRoot, require("./routes/Authentication"));
app.use(apiRoot, require("./routes/users"));
app.use(apiRoot, require("./routes/dashboard"));
app.use(apiRoot, require("./routes/categories"));
app.use(apiRoot, require("./routes/questions"));
app.use(apiRoot, require("./routes/answers"));
app.use(apiRoot, require("./routes/comment"));

// Config middleware
app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

app.use(logErrors());

export default app;
