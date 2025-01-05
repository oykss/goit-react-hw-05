import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Error from '../../components/Error/Error';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getMoviesQuery } from '../../lib/api_handler';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    async function getMovies(query) {
      try {
        const { results } = await getMoviesQuery(query);
        setMovies(results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }

    getMovies(query);
  }, [query]);

  return (
    <section>
      <SearchBar />
      {movies.length !== 0 ? <MovieList movies={movies} /> : <Error />}
    </section>
  );
}
