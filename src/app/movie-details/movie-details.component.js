import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchMovieDetails } from './movie-details.actions';

class MovieDetails extends Component {
  componentDidMount() {
    const movieTitle = this.props.match.params.title;
    this.props.fetchMovieDetails(movieTitle);
  }

  render() {
    return this.props.movieDetails.movie === null
      ?  <h1>Not Found</h1>
      : this.renderMovieDetails();
  }

  renderMovieDetails() {
    return <h1>{this.props.movieDetails.movie.title}</h1>;
  }
}

MovieDetails = withRouter(MovieDetails);

MovieDetails = connect(
  ({ movieDetails }) => ({ movieDetails }),
  { fetchMovieDetails },
)(MovieDetails);

export default MovieDetails;
