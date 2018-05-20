import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../common/common.actions';

class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props);
    return <h1>Hi</h1>;
  }
}

export default connect(
  ({ movies }) => ({ movies }),
  { fetchMovies },
)(MovieDetails);
