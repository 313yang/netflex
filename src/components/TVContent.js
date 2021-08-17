import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import Section from "./Section";
import Message from "./Message";
import Poster from "./Poster";

const Container = styled.div`
  margin-top: 80px;
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
            <Poster
              key={show.id}
              title={show.original_name}
              imgUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date?.substring(0, 4)}
              id={show.id}
            />
          ))}
        </Section>
      )}
      {popular?.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              title={show.original_name}
              imgUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date?.substring(0, 4)}
              id={show.id}
            />
          ))}
        </Section>
      )}
      {airingToday?.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <Poster
              key={show.id}
              title={show.original_name}
              imgUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date?.substring(0, 4)}
              id={show.id}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
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
