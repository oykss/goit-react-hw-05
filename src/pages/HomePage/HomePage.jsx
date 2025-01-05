import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../lib/api_handler';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies(page) {
      try {
        const { results } = await getTrendingMovies(page);
        setMovies(results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }

    getMovies(1);
  }, []);

  return (
    <section>
      <MovieList movies={movies} />
    </section>
  );
}
