import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
              alt={title}
              className={css.img}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
