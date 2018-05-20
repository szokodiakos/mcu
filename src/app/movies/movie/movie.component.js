import React from 'react';

const Movie = ({ name, onMovieClick }) => (
  <li onClick={onMovieClick}>{name}</li>
);

export default Movie;
