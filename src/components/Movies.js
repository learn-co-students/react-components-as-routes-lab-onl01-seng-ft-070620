import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => <div className="movie">
                            <p>{m.title}</p>
                            <p>{m.time} minutes long</p>
                            <p>Metascore: {m.metascore}</p>
                            <label>Genres: </label>
                              <ul>{m.genres.map (genre => <li>{genre}</li>)}</ul>
                          </div>)}
    </div>
  );
};

export default Movies;
