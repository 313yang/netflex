import PropTypes from "prop-types";
import styled from "styled-components";
import Message from "./Message";
import Loader from "./Loader";
import Section from "./Section";
import Poster from "./Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const MovieContent = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying?.length > 0 && (
        <Section title="Now playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              title={movie.original_title}
              imgUrl={movie.poster_path}
              isMovie={true}
              rating={movie.vote_average}
              year={movie.release_date?.substring(0, 4)}
              id={movie.id}
            />
          ))}
        </Section>
      )}
      {upcoming?.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              title={movie.original_title}
              imgUrl={movie.poster_path}
              isMovie={true}
              rating={movie.vote_average}
              year={movie.release_date?.substring(0, 4)}
              id={movie.id}
            />
          ))}
        </Section>
      )}
      {popular?.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              title={movie.original_title}
              imgUrl={movie.poster_path}
              isMovie={true}
              rating={movie.vote_average}
              year={movie.release_date?.substring(0, 4)}
              id={movie.id}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );
MovieContent.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default MovieContent;
