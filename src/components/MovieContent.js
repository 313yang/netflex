import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import Section from "./Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const MovieContent = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying?.length > 0 && (
        <Section title="Now playing">
          {nowPlaying.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </Section>
      )}
      {upcoming?.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </Section>
      )}
      {popular?.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </Section>
      )}
    </Container>
  );
MovieContent.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

export default MovieContent;
