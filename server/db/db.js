// Hint from code mentor Tutorials @OlawaleAladeusi
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_URL
});

pool.on("connect", () => {
    console.log("connected to the db");
});



/*-----Create Users Table------*/

const createUsersTable = () => {
    const queryString =
        `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(150) NOT NULL,
        firstname VARCHAR(150) NOT NULL,
        lastname VARCHAR(150) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(150) NOT NULL,
        created_date TIMESTAMP
      )`;

    pool.query(queryString)
        .then((res) => {
            console.log("----------------->", res);
            pool.end();
        })
        .catch((err) => {
            console.log("error------------->", err);
            pool.end();
        });
}


/*-----Create Question Table------*/

const createQuestionsTable = () => {
    const queryString =
        `CREATE TABLE IF NOT EXISTS questions (
        ID SERIAL PRIMARY KEY,
        question TEXT NOT NULL,
        FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE,
        created_date TIMESTAMP
        )`;

    pool.query(queryString)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
}

/*----------Create Answer Table---------*/

const createAnswersTable = () => {
    const queryString =
        `CREATE TABLE IF NOT EXISTS answers (
        ID SERIAL PRIMARY KEY,
        answer TEXT not null,
        FOREIGN KEY (id) REFERENCES questions (id) ON DELETE CASCADE,
        created_date TIMESTAMP
        )`;

    pool.query(queryString)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
}



/*-----Drop Users Table-----*/
const dropUsersTable = () => {
    const queryString = "DROP TABLE IF EXISTS users returning *";
    pool.query(queryString)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
}

/*-----Drop Questions Table-----*/
const dropQuestionsTable = () => {
    const queryString = "DROP TABLE IF EXISTS questions returning *";
    pool.query(queryString)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
}

/*-----Drop Answers Table-----*/
const dropAnswersTable = () => {
    const queryString = "DROP TABLE IF EXISTS answers returning *";
    pool.query(queryString)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
}


/*---------Create All Tables-----------*/
const createAllTables = () => {
    createUsersTable();
    createQuestionsTable();
    createAnswersTable();
    console.log("Table Created");
}

dropAllTables();
/*------Drop All Tables------*/
const dropAllTables = () => {
    dropUsersTable();
    dropQuestionsTable();
    dropAnswersTable();
    console.log("Table Removed");
}

createAllTables();

pool.on("remove", () => {
    console.log("Table Created removed (Ignore This)");
    process.exit(0);
});

// export default{
//     createQuestionsTable,
//     createAnswersTable,
//     createUsersTable,
//     createAllTables,
//     dropUsersTable,
//     dropQuestionsTable,
//     dropAllTables
// };


require("make-runnable");

/*--------------------------------------------------------------------------*/

