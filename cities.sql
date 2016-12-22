DROP DATABASE IF EXIST puppies;
CREATE DATABASE cities;

\c puppies;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  city VARCHAR,
  population INTEGER
);

INSERT INTO cities (city, population)
  VALUES ('Oakland', 405328);
