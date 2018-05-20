import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from './movie/movie.component';
import { fetchMovies, showMovieDetails } from './movies.actions';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.props.movies.map(m => <Movie key={m.name} {...m} onMovieClick={() => this.props.showMovieDetails(m.name)}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ movies }) => ({ movies }),
  { fetchMovies, showMovieDetails },
)(Movies);
