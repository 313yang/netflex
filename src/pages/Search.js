import { useState } from "react";
import { moviesApi, tvApi } from "../api";
import SearchContent from "../components/SearchContent";

const Search = () => {
  const [results, setResults] = useState({ movie: null, show: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm();
    }
  };
  const searchByTerm = async () => {
    try {
      setLoading(true);
      const movieResults = await moviesApi.search(searchTerm);

      const showResults = await tvApi.search(searchTerm);
      setResults({
        movie: movieResults.data.results,
        show: showResults.data.results,
      });
    } catch (error) {
      setError("Can't find results");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  return (
    <SearchContent
      movieResults={results.movie}
      tvResults={results.show}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      onChange={onChange}
    />
  );
};
export default Search;
