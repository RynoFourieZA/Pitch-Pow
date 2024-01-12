import { Pool } from "pg";

require("dotenv").config();

const dbUrl = process.env.DATABASE_URL || process.env.DB_URL;

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000, 
	ssl: dbUrl.includes("localhost") ? false : { rejectUnauthorized: false }
});

export const connectDb = async () => {
	let client;
	try {
		client = await pool.connect();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	client.release();
};

export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool) };
