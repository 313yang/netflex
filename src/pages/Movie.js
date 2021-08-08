import { useCallback, useEffect, useState } from "react";
import { moviesApi } from "../api";
import MovieContent from "../components/MovieContent";

const Movie = () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    upcoming: [],
    popular: [],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const {
      data: { results: nowPlaying },
    } = await moviesApi.nowPlaying();
    const {
      data: { results: popular },
    } = await moviesApi.popular();
    const {
      data: { results: upcoming },
    } = await moviesApi.upcoming();
    setMovies({ upcoming, nowPlaying, popular });
  };

  useEffect(() => {
    try {
      getMovies();
    } catch (error) {
      setError("Can't find Movie.");
    } finally {
      setLoading(false);
    }
  }, [movies]);
  console.log(movies);
  return (
    <MovieContent
      nowPlaying={movies.nowPlaying}
      upcoming={movies.upcoming}
      popular={movies.popular}
      error={error}
      loading={loading}
    />
  );
};
export default Movie;
