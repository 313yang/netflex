import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "8f93061a4add7def0724e56bab9c6848",
    language: "en-US",
  },
});
export const tvApi = {
  latest: () => api.get("tv/latest"),
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
};
export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
};
