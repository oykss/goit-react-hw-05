import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaCalendarCheck, FaStar } from 'react-icons/fa';
import { NavLink, useParams } from 'react-router-dom';
import { getMovieId } from '../../lib/api_handler';
import css from './MovieDetailsPage.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const links = {
  Cast: '/cast',
  Reviews: '/reviews',
};

export default function MovieDetailsPage() {
  const [movie, setMovies] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie(id) {
      try {
        const results = await getMovieId(id);
        setMovies(results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }

    getMovie(movieId);
  }, [movieId]);

  const {
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    genres,
  } = movie;
  return (
    <section className={css.section}>
      <img
        src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
        alt={original_title}
        className={css.img}
      />
      <ul className={css.infoWrap}>
        <li className={css.name}>
          <h2>{original_title}</h2>
          <div className={css.score}>
            <FaStar className={css.icon} />
            {vote_average}
          </div>
        </li>
        <li className={css.date}>
          <FaCalendarCheck className={css.icon} />
          {release_date}
        </li>
        <li>
          <ul className={css.listGenres}>
            <li className={css.title}>Genres: </li>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </li>
        <li className={css.desc}>
          <span className={css.title}>Description: </span>
          {overview}
        </li>
        <li>
          <nav className={css.navList}>
            {Object.keys(links).map((key, i) => (
              <NavLink
                to={`/movies/${movieId + links[key]}`}
                key={i}
                className={buildLinkClass}
              >
                {key}
              </NavLink>
            ))}
          </nav>
        </li>
      </ul>
    </section>
  );
}
