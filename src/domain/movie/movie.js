class Movie {
  constructor(name) {
    this.name = name;
  }

  toURL() {
    return this.name.toLowerCase().replace(/\s/g, '-');
  }
}

export default Movie;
