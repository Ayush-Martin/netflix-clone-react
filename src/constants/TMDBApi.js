const TMDB_AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_AUTH_TOKEN,
  },
};

export const MOVIE_POSTER_BASE_URL = "https://image.tmdb.org/t/p/";
