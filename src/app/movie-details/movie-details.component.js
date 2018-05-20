import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchMovieDetails } from './movie-details.actions';

class MovieDetails extends Component {
  componentDidMount() {
    const movieName = this.props.match.params.name;
    this.props.fetchMovieDetails(movieName);
  }

  render() {
    return this.props.movieDetails.movie === null
      ?  <h1>Not Found</h1>
      : this.renderMovieDetails();
  }

  renderMovieDetails() {
    return <h1>{this.props.movieDetails.movie.name}</h1>;
  }
}

MovieDetails = withRouter(MovieDetails);

MovieDetails = connect(
  ({ movieDetails }) => ({ movieDetails }),
  { fetchMovieDetails },
)(MovieDetails);

export default MovieDetails;
