import React from 'react';

const Movie = ({ logo, title, onMovieClick }) => (
  <div onClick={onMovieClick} style={{ marginTop: 50, marginBottom: 50 }}>
    <img src={getImage(logo)} alt={title} style={{ width: 200 }} />
  </div>
);

const getImage = logo => require(`../../assets/movie-logos/${logo}`);

export default Movie;
