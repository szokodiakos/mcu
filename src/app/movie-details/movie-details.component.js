import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchMovieDetails, navigateToCharacterDetails } from './movie-details.actions';

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
    const movie = this.props.movieDetails.movie;
    return (
      <div>
        <h1>{movie.title}</h1>
        {movie.characters && <ul>
          {movie.characters.map(c => <li onClick={() => this.props.navigateToCharacterDetails(c.character.id)} key={c.character.id}>{c.character.name}</li>)}
        </ul>}
      </div>
    );
  }
}

MovieDetails = withRouter(MovieDetails);

MovieDetails = connect(
  ({ ui: { movieDetails } }) => ({ movieDetails }),
  { fetchMovieDetails, navigateToCharacterDetails },
)(MovieDetails);

export default MovieDetails;
