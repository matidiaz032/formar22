-- SELECT series.title, genres.name
-- FROM series
-- LEFT JOIN genres
-- ON series.genre_id = genres.id;

-- SELECT episodes.title, actors.first_name, actors.last_name
-- FROM episodes 
-- INNER JOIN actor_episode ON episode_id = episodes.id
-- INNER JOIN actors ON actor_id = actors.id

-- SELECT DISTINCT actors.first_name, actors.last_name
-- FROM actors
-- INNER JOIN actor_movie ON actors.id = actor_id
-- INNER JOIN movies ON movie_id = movies.id
-- WHERE movies.title LIKE('La guerra%')

-- SELECT movies.title, COALESCE(genres.name, "no tiene genero") FROM movies
-- LEFT JOIN genres ON genres.id = genre_id

-- SELECT series.title AS 'Titulo', 
-- DATEDIFF(series.end_date, series.release_date)
-- AS 'Duración' FROM series

-- select actors.first_name, actors.last_name 
-- from actors 
-- where char_length(actors.first_name) > 6
-- order by actors.first_name;

-- select count(*) as 'Total de episodios' from episodes

-- select series.title, count(*) as 'Total' 
-- from series
-- inner join seasons on seasons.serie_id = series.id 
-- group by series.id

-- SELECT genres.name, COUNT(*) FROM genres
-- INNER JOIN movies
-- ON genres.id = movies.genre_id
-- GROUP BY genres.id 

select genres.name, count(*) as 'Total'
from genres
inner join movies on genres.id = movies.genre_id 
group by genres.id 
having count(*) >= 3