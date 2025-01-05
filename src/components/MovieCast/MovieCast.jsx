import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCastId } from '../../lib/api_handler';

import 'swiper/css';
import 'swiper/css/navigation';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast(id) {
      try {
        const { cast } = await getCastId(id);
        console.log(cast);

        setCast(cast);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }

    getCast(movieId);
  }, [movieId]);

  return (
    <Swiper
      slidesPerView={2}
      navigation
      centeredSlides={true}
      modules={[Navigation]}
      className={css.slider}
    >
      {cast.map(({ id, character, original_name, profile_path }) => (
        <SwiperSlide key={id} className={css.wrap}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
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
