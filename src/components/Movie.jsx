import { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer",
    ratings: 7,
  });

  const [movies, setMovies] = useState([
    { id: 1, title: "Spider man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);

  const handleClickMovie = () => {
    setMovie({
      ...movie,
      ratings: 5,
    });
  };

  const handleClickMovies = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "Harry Potter" } : m))
    );
  };

  return (
    <div>
      <div>Movie : {movie.title}</div>
      <div>Ratings: {movie.ratings}</div>
      <div>
        <button onClick={handleClickMovie}>change</button>
      </div>
      {movies.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}
      <div>
        <button onClick={handleClickMovies}>change movies</button>
      </div>
    </div>
  );
};

export default Movie;
