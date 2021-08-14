import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import Section from "./Section";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 26px;
  width: 20%;
  :focus {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
`;

const SearchContent = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  onChange,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movie and TV Shows"
          value={searchTerm}
          onChange={onChange}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults?.length > 0 && (
            <Section title="Movie Result">
              {movieResults.map((movie) => (
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResults?.length > 0 && (
            <Section title="Movie Result">
              {tvResults.map((show) => (
                <span key={show.id}>{show.name}</span>
              ))}
            </Section>
          )}
        </>
      )}
    </Container>
  );
};

SearchContent.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchContent;
