const movieNameToURL = (movieName) => movieName.toLowerCase().replace(/\s/g, '-');

export default movieNameToURL;
