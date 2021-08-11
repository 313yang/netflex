import { useEffect, useState } from "react";
import { tvApi } from "../api";
import TVContent from "../components/TVContent";

const TV = () => {
  const [shows, setShows] = useState({
    topRated: [],
    popular: [],
    airingToday: [],
  });

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getShows = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      setShows({ topRated, popular, airingToday });
    } catch (error) {
      setError("Can't find TV show.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getShows();
  }, []);
  console.log(shows);

  return (
    <TVContent
      topRated={shows.topRated}
      popular={shows.popular}
      airingToday={shows.airingToday}
      error={error}
      isLoading={isLoading}
    />
  );
};
export default TV;
