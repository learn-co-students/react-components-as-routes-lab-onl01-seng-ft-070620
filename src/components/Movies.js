import React from 'react';
import { movies } from '../data';

const renderList = movies.map((movie, index) => {
  return (
    <div key={index} >
      {movie.title}
      {movie.time}
      <ul>
        {movie.genres.map((genre, index) => <li key={index} >{genre}</li>)}
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderList}
    </div>
  );
};

export default Movies;
