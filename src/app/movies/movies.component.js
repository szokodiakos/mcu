import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from './movie/movie.component';
import { fetchMovies, navigateToMovieDetails } from './movies.actions';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        {this.props.movies.map(movieRow => (
          <div key={movieRow} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {movieRow.map(movie => (
              <Movie onMovieClick={() => this.props.navigateToMovieDetails(movie.id)} key={movie.id} {...movie} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Movies = connect(({ ui: { movies } }) => ({ movies }), {
  fetchMovies,
  navigateToMovieDetails,
})(Movies);

export default Movies;
