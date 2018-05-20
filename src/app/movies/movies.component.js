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
        <div>
          <ul>
            {this.props.movies.map(m => <Movie key={m.title} {...m} onMovieClick={() => this.props.navigateToMovieDetails(m)}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

Movies = connect(
  ({ movies }) => ({ movies }),
  { fetchMovies, navigateToMovieDetails },
)(Movies);

export default Movies;
