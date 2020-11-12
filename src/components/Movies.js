import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((m, i) => (
          <div key={i}>
            <h3>Name: {m.title}</h3>
            <p>Time: {m.time}</p>
            <ul>Genres:
              {m.genres.map(g => <li>{g}</li>)}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
