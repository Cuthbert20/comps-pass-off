
--created movies table
CREATE TABLE movies (
movie_id SERIAL PRIMARY KEY,
movie_title VARCHAR(50),
movie_rated VARCHAR(10),
movie_info VARCHAR(255)
)
--created actor table with forgien key
CREATE TABLE actor (
actor_id serial PRIMARY KEY,
movie_id INT REFERENCES movies(movie_id),
actor_name VARCHAR(50)
)

--inserting values into movies table
INSERT INTO movies (movie_title, movie_rated, movie_info)
VALUES
('Alien', 'R', 'The first time we screamed in space....but, no one could hear us')

--inserting values into actor table
INSERT INTO actor (movie_id, actor_name)
VALUES
('1', 'bill paxton')

--select all from movies

SELECT * FROM movies;

--select all from actor
SELECT * FROM actor;

--actor has a many-to-many with movies an actor could be in several movies

--person table
CREATE TABLE person (
person_id SERIAL PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
person_description text
)

--passport table
CREATE TABLE passportInfo (
passport_id SERIAL PRIMARY KEY,
person_id INT REFERENCES person(person_id),
passport_number FLOAT
)

--person and passport have a one-to-one with eachother each person can only have one passport.
