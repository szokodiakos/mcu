class Movie {
  constructor(data) {
    this.title = data.title;
  }

  toURL() {
    return this.title.toLowerCase().replace(/\s/g, '-');
  }
}

export default Movie;
