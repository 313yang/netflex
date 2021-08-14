import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import Section from "./Section";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVContent = ({ topRated, popular, airingToday, error, isLoading }) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      {topRated?.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <p key={show.id}>{show.name}</p>
          ))}
        </Section>
      )}
      {popular?.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <p key={show.id}>{show.name}</p>
          ))}
        </Section>
      )}
      {airingToday?.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <p key={show.id}>{show.name}</p>
          ))}
        </Section>
      )}
    </Container>
  );

TVContent.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
};

export default TVContent;
