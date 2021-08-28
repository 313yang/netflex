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

  const getParams = useCallback(async () => {
    // setState({ ...state, isMovie: true });
    const isNumberId = Number(id);
    setState({ ...state, id });
    // console.log(id, isNumberId, pathname);
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
  }, [id, push, state]);
  useEffect(() => {
    getParams();
  }, [getParams, pathname]);
  return (
    <DetailContent result={state.result} loading={loading} error={error} />
  );
};
export default Detail;
