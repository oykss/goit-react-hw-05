import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies(page = 1) {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      page: page,
      language: 'en-US',
    },
  });

  return data;
}

export async function getMovieId(id) {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: 'en-US',
    },
  });

  return data;
}

export async function getMoviesQuery(query) {
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: 'en-US',
      query,
    },
  });

  return data;
}

export async function getReviewsId(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: 'en-US',
    },
  });

  return data;
}

export async function getCastId(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: 'en-US',
    },
  });

  return data;
}
