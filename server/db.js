import { Pool } from "pg";

require("dotenv").config();

// setting up a connecion to the DB.
const dbUrl = process.env.DATABASE_URL || `postgres://postgres:${process.env.PASSWORD}@localhost:5432/cyf`;

const pool = new Pool({
	connectionString: dbUrl, // creating a link to the DB
	connectionTimeoutMillis: 5000, //creating a time out for faulty connections
	ssl: dbUrl.includes("localhost") ? false : { rejectUnauthorized: false }, //connecting a localhost to the for the server and db.
});

// This is making a pool connection with the database
export const connectDb = async () => {
	let client;
	try {
		client = await pool.connect();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};
// This disconnect the pool request on a bad time out
export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool) };
