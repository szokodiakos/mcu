import React, { Component } from 'react';
import { Route } from 'react-router';

import Movies from './movies/movies.component';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Movies}/>
      </div>
    );
  }
}

export default App;
