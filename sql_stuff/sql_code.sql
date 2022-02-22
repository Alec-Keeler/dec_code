-- Task 2d
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS boardgames;
DROP TABLE IF EXISTS players;

-- Task 2a
CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    max_players INTEGER NOT NULL,
    avg_rating NUMERIC(4, 2) NOT NULL,
    category VARCHAR(50) NOT NULL
);
-- NUMERIC(p, s)
-- precision: total number of allowed characters
-- scale: total number of characters to right of decimal place 1.56

-- Command to run sql files
-- psql -d boardgame_dev < sql_code.sql

-- Task 2b
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    fave_category VARCHAR(50)
);

-- Task 2c
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    boardgame_id INTEGER REFERENCES boardgames (id)
);

ALTER TABLE players ADD COLUMN prefers_video_games BOOLEAN DEFAULT false;