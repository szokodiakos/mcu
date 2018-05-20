import { of } from "rxjs/observable/of";

const movies = [{
  name: 'The Avengers',
}];

class MoviesRepo {
  getAll() {
    return of(movies);
  }
}

export default MoviesRepo;
