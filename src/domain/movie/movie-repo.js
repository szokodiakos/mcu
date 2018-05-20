import { of } from 'rxjs/observable/of';

import Movie from './movie';

const movies = [
  new Movie('The Avengers'),
];

class MovieRepo {
  getAll() {
    return of(movies);
  }

  getByURL(url) {
    return of(movies.find(m => m.toURL() === url));
  }
}

export default MovieRepo;
