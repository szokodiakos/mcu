import React, { Component } from 'react';
import { Route } from 'react-router';

import Movies from './movies/movies.component';
import MovieDetails from './movie-details/movie-details.component';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Movies}/>
        <Route path="/movies/:name" component={MovieDetails}/>
      </div>
    );
  }
}

export default App;
