import React, { Component } from 'react';
import { Route } from 'react-router';

import Movies from './movies/movies.component';
import MovieDetails from './movie-details/movie-details.component';
import CharacterDetails from './character-details/character-details.component';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:title" component={MovieDetails} />
        <Route path="/characters/:name" component={CharacterDetails} />
      </div>
    );
  }
}

export default App;
