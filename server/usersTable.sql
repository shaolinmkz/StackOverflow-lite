/*DROP DATABASE IF EXISTS stackoverflow;*/
/*CREATE DATABASE stackoverflow;*/


\c stackoverflow;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(50) not null,
  firstName VARCHAR(50) not null,
  lastName VARCHAR(50) not null,
  email TEXT not null,
  passwd PASSWORD(50) not null
);

INSERT INTO users(username, firstName, lastName, email, passwd)
VALUES ("shaolimkz", "Emeka", "Nwabuzor", "nwabuzor@gmail.com", "asdf;lkj");