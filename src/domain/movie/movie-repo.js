import { of } from 'rxjs/observable/of';

import movies from './movies';

class MovieRepo {
  getAll() {
    return of(movies);
  }

  getByURL(url) {
    return of(movies.find(m => m.toURL() === url));
  }
}

export default MovieRepo;
