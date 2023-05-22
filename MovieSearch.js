import React, { useState, useEffect } from 'react';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=YOUR_API_KEY');
      const data = await response.json();
      setMovies(data.results.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Top 10 Trending Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie)}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${selectedMovie.title} trailer`)}`} target="_blank" rel="noopener noreferrer">
            Watch Trailer on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
