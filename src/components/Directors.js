import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, i) => (
          <div key={i}>
            <h3>Name: {d.name}</h3>
            <ul>Movies:
              {d.movies.map(m => <li>{m}</li>)}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Directors
