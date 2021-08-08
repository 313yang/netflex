const MovieContent = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return (
    <>
      {nowPlaying.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
      {upcoming.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
      {popular.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </>
  );
};
export default MovieContent;
