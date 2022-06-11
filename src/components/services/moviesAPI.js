import axios from 'axios';

export async function getMovies(search) {
  const data = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=da20cf53e1f8df5e7c28db8c672e3f8f&query=${search}`
  );
  return data;
}

export async function getMovie(movieID) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=da20cf53e1f8df5e7c28db8c672e3f8f`
  );
  return response;
}

export async function getTrendingMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=da20cf53e1f8df5e7c28db8c672e3f8f'
  );
  return response;
}
