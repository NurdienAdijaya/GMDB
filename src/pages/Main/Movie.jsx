import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=starwars&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 text-center mt-3">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
