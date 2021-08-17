import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import Section from "./Section";
import Message from "./Message";
import Poster from "./Poster";

const Container = styled.div`
  margin-top: 80px;
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
          {tvResults?.length > 0 && (
            <Section title="TV Show Result">
              {tvResults.map((show) => (
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
        </>
      )}
      {error && <Message color="#e74c3c" text={error} />}
      {tvResults?.length === 0 && movieResults?.length === 0 && (
        <Message text="Nothing found" color="#95a5a6" />
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
