import express from "express";
import morgan from "morgan";
import path from "path";
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

// Routes
app.use("/auth", require("./routes/Authentication"));
app.use(apiRoot, require("./routes/dashboard"));
app.use(apiRoot, require("./routes/api"));
app.use(apiRoot, require("./routes/categories"));
app.use(apiRoot, require("./routes/Admin"));
app.use(apiRoot, require("./routes/questions"));
app.use(apiRoot, require("./routes/answers"));
app.use(apiRoot, require("./routes/pitch"));

// Config middleware
app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

app.use(logErrors());

export default app;
