CREATE DATABASE recipe_database;

--\c into database
CREATE TABLE recipe(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    ingredients TEXT []
);