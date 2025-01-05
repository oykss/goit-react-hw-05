import { ColorRing } from 'react-loader-spinner';
import css from './Loading.module.css';

export default function Loading() {
  return (
    <div className={css.wrap}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
}
