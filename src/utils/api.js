const TMDB_AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_AUTH_TOKEN,
  },
};

export const getPopularMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    const json = await res.json();
    console.log(json);

    return json.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );

    const json = await res.json();
    console.log(json);

    return json.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );

    const json = await res.json();
    console.log(json);

    return json.results;
  } catch (err) {
    console.log(err);
  }
};
