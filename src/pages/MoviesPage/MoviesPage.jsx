import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Error from '../../components/Error/Error';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getMoviesQuery } from '../../lib/api_handler';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    async function getMovies(query) {
      setError(false);
      try {
        const { results } = await getMoviesQuery(query);
        if (results.length === 0 && query) {
          setError(true);
        } else {
          setMovies(results);
        }
      } catch (error) {
        console.error('Failed to fetch movies:', error);
        setError('Failed to fetch movies. Please try again later.');
      }
    }

    getMovies(query);
  }, [query]);

  return (
    <section>
      <SearchBar />
      {error ? <Error /> : <MovieList movies={movies} />}
    </section>
  );
}
