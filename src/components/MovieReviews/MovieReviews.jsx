import { useEffect, useState } from 'react';
import { FaUserNinja } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getReviewsId } from '../../lib/api_handler';

import 'swiper/css';
import 'swiper/css/navigation';
import Error from '../Error/Error';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews(id) {
      try {
        const { results } = await getReviewsId(id);
        setReviews(results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    }

    getReviews(movieId);
  }, [movieId]);

  if (reviews.length === 0) return <Error />;

  return (
    <Swiper slidesPerView={1} navigation modules={[Navigation]}>
      {reviews.map(({ id, author, content }) => (
        <SwiperSlide key={id}>
          <div className={css.slide}>
            <div className={css.wrap}>
              <FaUserNinja className={css.icon} /> {author}
            </div>
            {content}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
