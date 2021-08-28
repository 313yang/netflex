import { useCallback, useEffect, useState } from "react";
import { moviesApi, tvApi } from "../api";
import DetailContent from "../components/DetailContent";

const Detail = (props) => {
  const {
    match: {
      params: { id },
    },
    history: { push },
    location: { pathname },
  } = props;

  const [state, setState] = useState({
    isMovie: pathname.includes("/movie/"),
    result: null,
    id: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getParams = async () => {
    // setState({ ...state, isMovie: true });
    const isNumberId = Number(id);
    setState({ ...state, id });
    if (isNaN(isNumberId)) {
      return push("/");
    }
    try {
      setLoading(true);
      if (state.isMovie) {
        const request = await moviesApi.movieDetail(isNumberId);
        setState({ ...state, result: request.data });
      } else {
        const request = await tvApi.showDetail(isNumberId);
        setState({ ...state, result: request.data });
      }
    } catch (error) {
      setError("Can't find anything");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <DetailContent result={state.result} loading={loading} error={error} />
  );
};
export default Detail;
