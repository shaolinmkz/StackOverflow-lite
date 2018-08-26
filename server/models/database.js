const pg = require("pg");
const connectionString = "postgresql://obiora:14865466@localhost:5432/stackoverflow";

const client = new pg.Client(connectionString); // create a new instance of 'Client' to interact with the database
client.connect(); // establish communication using the connect() method

const query = client.query(
	"CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(50) not null," + 
    "firstName VARCHAR(50) not null), lastName VARCHAR(50) not null, email CITEXT not null" + 
    "password VARCHAR(50) not null");

query.on("end", () => { client.end(); });