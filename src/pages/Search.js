import { useState } from "react";
import { moviesApi, tvApi } from "../api";
import SearchContent from "../components/SearchContent";

const Search = () => {
  const [results, setResults] = useState({ movie: null, show: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (searchTerm !== "") {
      setSearchTerm();
    }
  };
  const searchByTerm = async () => {
    try {
      setLoading(true);
      const movieResults = await moviesApi.search(searchTerm);
      const tvResults = await tvApi.search(searchTerm);
    } catch (error) {
      setError("Can't find results");
    } finally {
      setLoading(false);
    }
  };
  return (
    <SearchContent
      movieResults={results.movie}
      tvResults={results.show}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};
export default Search;
