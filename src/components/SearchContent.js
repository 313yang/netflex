import PropTypes from "prop-types";
import styled from "styled-components";

const SearchContent = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
}) => {
  return <></>;
};

SearchContent.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
};

export default SearchContent;
