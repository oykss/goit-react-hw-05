import { AiOutlineReload } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className={css.wrap}>
      <button type="button" onClick={() => navigate(-1)}>
        <IoIosArrowBack className={css.icon} />
        Back
      </button>
      <button type="button" onClick={() => window.location.reload()}>
        <AiOutlineReload className={css.icon} />
        Reload Page
      </button>
    </div>
  );
}
