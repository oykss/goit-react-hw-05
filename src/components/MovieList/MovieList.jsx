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
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt={title}
              className={css.img}
            />
            {!poster_path ? <h2 className={css.title}>{title}</h2> : ''}
          </Link>
        </li>
      ))}
    </ul>
  );
}
