DROP DATABASE IF EXISTS stackoverflow;
CREATE DATABASE stackoverflow;


\c stackoverflow;

CREATE TABLE Users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(50) not null ,
  firstName VARCHAR(100) not null,
  lastName VARCHAR(100) not null,
  email VARCHAR(100) not null,
  passwd PASSWORD not null,
  dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users(username, firstName, lastName, email, passwd)
VALUES ("obiora007", "adewole", "james", "mustapha@gmail.com", "asdf;lkj");