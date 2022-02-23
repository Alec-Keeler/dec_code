-- Task 2d
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS lfg;
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

-- Task 4a
-- SELECT * FROM boardgames;

-- Task 4b
-- SELECT name FROM boardgames;

-- Task 4c
-- SELECT name, category 
-- FROM boardgames
-- WHERE category = 'Strategy';

-- Task 4d
-- SELECT name, avg_rating
-- FROM boardgames
-- WHERE avg_rating BETWEEN 8.3 AND 8.7;

-- Task 4e
-- SELECT name, max_players, (avg_rating * 10) AS percentage
-- FROM boardgames
-- WHERE max_players > 4;

-- Task 4f
-- SELECT name
-- FROM boardgames
-- WHERE category IN ('Strategy', 'Adventure')
-- ORDER BY category DESC;

-- Task 4g
-- SELECT id, name, category, avg_rating
-- FROM boardgames
-- WHERE category NOT IN ('Strategy', 'Adventure')
-- AND avg_rating > 8.5
-- ORDER BY name DESC
-- LIMIT 2;

-- Task 4h
-- SELECT content
-- FROM reviews
-- WHERE content ILIKE 't%';

-- Task 5a
-- UPDATE players
-- SET prefers_video_games = true
-- WHERE name = 'Alec';

-- UPDATE players
-- SET prefers_video_games = true
-- WHERE name IN ('Alec', 'Rawaha');

-- UPDATE boardgames
-- SET name = name || ' (Game of the year sponsored by Mountain Dew)';

-- Task 5b
-- DELETE FROM boardgames
-- WHERE id = 3;

-- Task 6a
-- SELECT * 
-- FROM boardgames
-- JOIN reviews ON (boardgames.id = reviews.boardgame_id)
-- WHERE boardgames.name = 'Pandemic Legacy: Season 1';

-- Task 6b
CREATE TABLE lfg (
    id SERIAL PRIMARY KEY,
    game_id INTEGER,
    player_id INTEGER,
    FOREIGN KEY (game_id) REFERENCES boardgames,
    FOREIGN KEY (player_id) REFERENCES players
);

INSERT INTO lfg (player_id, game_id)
VALUES
    (1, 5),
    (1, 2),
    (3, 1),
    (5, 5),
    (2, 2),
    (4, 4),
    (6, 4),
    (1, 4);

-- Task 6c
-- Terraforming Mars

-- SELECT boardgames.name, boardgames.id, lfg.game_id, lfg.player_id, players.id, players.name 
-- FROM boardgames
-- JOIN lfg ON (boardgames.id = lfg.game_id)
-- JOIN players ON (lfg.player_id = players.id)
-- WHERE boardgames.name = 'Terraforming Mars';

-- Task 7a
-- SELECT boardgames.name FROM boardgames
-- JOIN reviews ON (boardgames.id = reveiws.boardgame_id)
-- WHERE reviews.content ILIKE 't%';


-- SELECT boardgame_id FROM reviews
-- WHERE reviews.content ILIKE 't%'

-- SELECT name FROM boardgames
-- WHERE boardgames.id IN (
--     SELECT boardgame_id FROM reviews
--     WHERE reviews.content ILIKE 't%'
-- );


-- Task 7a
-- SELECT boardgames.name, boardgames.id, lfg.game_id, lfg.player_id, players.id, players.name 
-- FROM boardgames
-- JOIN lfg ON (boardgames.id = lfg.game_id)
-- JOIN players ON (lfg.player_id = players.id)
-- WHERE boardgames.name = 'Terraforming Mars';

-- SELECT boardgames.id FROM boardgames
-- WHERE boardgames.name = 'Terraforming Mars'

-- SELECT lfg.player_id FROM lfg
-- WHERE game_id = (
--     SELECT boardgames.id FROM boardgames
--     WHERE boardgames.name = 'Terraforming Mars'
-- )

-- SELECT players.name FROM players
-- WHERE players.id IN (
--     SELECT lfg.player_id FROM lfg
--     WHERE game_id = (
--         SELECT boardgames.id FROM boardgames
--         WHERE boardgames.name = 'Terraforming Mars'
--     )
-- );

-- Task 7b
SELECT fave_category FROM players
WHERE players.name = 'Rawaha'

SELECT boardgames.name FROM boardgames
WHERE category = (
    SELECT fave_category FROM players
    WHERE players.name = 'Rawaha'
);

