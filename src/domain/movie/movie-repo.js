import { of } from 'rxjs/observable/of';

import movieNameToURL from './movie-name-to-url';

const movies = [{
  name: 'The Avengers',
}];

class MovieRepo {
  getAll() {
    return of(movies);
  }

  getByURL(url) {
    return of(movies.find(m => movieNameToURL(m.name) === url));
  }
}

export default MovieRepo;
