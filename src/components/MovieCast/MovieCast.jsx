import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCastId } from '../../lib/api_handler';

import 'swiper/css';
import 'swiper/css/navigation';
import Error from '../Error/Error';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast(id) {
      try {
        const { cast } = await getCastId(id);
        setCast(cast);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }

    getCast(movieId);
  }, [movieId]);

  if (cast.length === 0) return <Error />;

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      navigation
      centeredSlides={true}
      modules={[Navigation]}
      className={css.slider}
    >
      {cast.map(({ id, character, original_name, profile_path }) => (
        <SwiperSlide key={id} className={css.wrap}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            }
            alt={original_name}
            className={css.img}
          />

          <h3>{original_name}</h3>
          <p>{character}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
