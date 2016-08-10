help;

use movies;

db.movies.insertOne({
  "title": "Jaws",
  "year": 1975,
  "imdb": "tt0073195"
});

db.movies.insertOne({
  "title": "Mad Max 2",
  "year": 1984,
  "imdb": "tt001984"
});

db.movies.insertOne({
  "title": "Raiders of the Lost Ark",
  "year": 1981,
  "imdb": "tt001981"
});

db.movies.find({"year":1981})
