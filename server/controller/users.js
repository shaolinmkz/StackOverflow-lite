import pg from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

// const connectionString;
const connectionString = process.env.DB_URL;

console.log("Connection String","------------>",connectionString);

const pgp = pg();

export const db = pgp(connectionString);

if (db) {
	console.log("------------->","DB connected!");
}



	export const createNewUsers = (req, res, next) => {
	const { username,
			firstName,
			lastName,
			email,
			password } = req.body;

	db.none(`INSERT INTO users(username, firstName, lastName, email, password)
		VALUES ($1, $2, $3, $4, $5)`, [username, firstName, lastName, email, password])
		.then(function () {
			res.status(201)
				.json({
					status: "Success",
					message: "User Created",
					data: res.body
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

export const loginUsers = (req, res, next) => {
	const { 
		email,
		password } = req.body;

	db.none(`INSERT INTO users(email, password)
		VALUES ($1, $2)`, [email, password])
		.then(function () {
			res.status(200)
				.json({
					status: "Success",
					message: "Welcome User",
					data: res.body
				});
		})
		.catch(function (err) {
			return next(err);
		});
}