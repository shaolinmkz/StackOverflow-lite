import dotEnv from "dotenv";
import pg from "pg-promise";
import { Pool } from "pg";

dotEnv.config();

const connectionString = process.env.DB;
const pool = new Pool({ connectionString });
pool.connect();

// DROP DATABASE IF EXISTS stackoverflow;
// CREATE DATABASE stackoverflow;
// DROP TABLE IF EXISTS Users;
// DROP TABLE IF EXISTS Answers;
// DROP TABLE IF EXISTS Questions;


const createTable = () => {
	const queries = `
    CREATE TABLE IF NOT EXISTS Users(
        ID SERIAL PRIMARY KEY,
        username VARCHAR(50) not null,
        firstName VARCHAR(100) not null,
        lastName VARCHAR(100) not null,
        email VARCHAR(100) not null,
        password VARCHAR(100) not null,
        dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS Questions(
        ID SERIAL PRIMARY KEY,
        question TEXT not null,
        userId INT REFERENCES Users(id),
        dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS Answers(
        ID SERIAL PRIMARY KEY,
        answer TEXT not null,
        questionId INT REFERENCES Question(id),
        userId INT REFERENCES Users(id),
        dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`;

	pool.query(queries)
		.then(result => pool.end())
		.catch(error => pool.end());
};
createTable();

const pgp = pg();
export const db = pgp(connectionString);


