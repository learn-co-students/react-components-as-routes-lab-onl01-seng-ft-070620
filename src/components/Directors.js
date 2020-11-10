import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => <div className="director">
                            <p>{d.name}</p>
                            <label>Movies: </label>
                              <ul>{d.movies.map (movie => <li>{movie}</li>)}</ul>
                          </div>)}
    </div>
  );
}

export default Directors
