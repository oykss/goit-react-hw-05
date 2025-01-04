import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../lib/api_handler';
import css from './HomePage.module.css';

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
      <ul className={css.list}>
        {movies &&
          movies.map(({ id, poster_path, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                  alt={title}
                  className={css.img}
                />
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
