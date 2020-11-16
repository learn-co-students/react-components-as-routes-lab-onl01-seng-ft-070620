import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=>
        <div>
          <h3>
            {movie.title}
          </h3>
          <p>Runtime: {movie.time}</p>
          <p>Genres: {movie.genres.join(", ")}</p>
        </div>)}
    </div>
  );
};

export default Movies;
