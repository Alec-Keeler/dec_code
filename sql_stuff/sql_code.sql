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


-- Task 3
INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
    ('Gloomhaven', 8.8, 4, 'Adventure'),
    ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
    ('Brass: Birmingham', 8.66, 4, 'Economic'),
    ('Terraforming Mars', 8.43, 5, 'Economic'),
    ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
    ('Spirit Island', 8.34, 4, 'Cooperative'),
    ('Mage Knight', 8.1, 4, 'Adventure'),
    ('Rising Sun', 7.88, 5, 'Strategy');

INSERT INTO players (name, fave_category, prefers_video_games)
VALUES
    ('Alec', 'Strategy', DEFAULT),
    ('Brad', 'Cooperative', DEFAULT),
    ('Rawaha', 'Adventure', DEFAULT),
    ('Dan', 'Economic', true),
    ('Drew', 'Strategy', DEFAULT),
    ('Ray', 'Economic', DEFAULT);

INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really like this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);