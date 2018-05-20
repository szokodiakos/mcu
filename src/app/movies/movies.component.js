import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from './movie/movie.component';
import { fetchMovies } from './movies.actions';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map(m => <Movie key={m.name} {...m}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ movies }) => ({ movies }),
  { fetchMovies },
)(Movies);
