CREATE DATABASE person_database;

--\c into database
CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    age INTEGER
);
