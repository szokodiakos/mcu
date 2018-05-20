import React from 'react';

const Movie = ({ title, onMovieClick }) => (
  <li onClick={onMovieClick}>{title}</li>
);

export default Movie;
