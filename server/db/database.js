import promise from "bluebird";

const options = {
    // Initialization Options
    promiseLib: promise
};

//------------OVERRIDING pg-promise default library with bluebird---------------
//------------Bluebird has been known to be FASTER than ES6 Promises------------
//------------Bluebird also comes with MORE FEATURES----------------------------
const pgp = require("pg-promise")(options);

// Define Connection string details to db ("postgresql://username:password@localhost:5432/stackoverflow")
const connectionString = pgp("postgresql://obiora:14865466@localhost:5432/stackoverflow");

// Passed the Connection string to the pg-promise instance "pgp" to create a global connection instance
const db = pgp(connectionString);

export { db };
