import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import css from './Layout.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const links = {
  Home: '/',
  Movies: '/movies',
};

export default function Layout() {
  return (
    <div className={css.nav}>
      <Container>
        <nav className={css.navList}>
          {Object.keys(links).map((key, i) => (
            <NavLink to={links[key]} key={i} className={buildLinkClass}>
              {key}
            </NavLink>
          ))}
        </nav>
      </Container>
    </div>
  );
}
