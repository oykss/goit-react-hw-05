import { Route, Routes } from 'react-router-dom';
import Container from '../components/Container/Container';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <main>
      <Layout />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<HomePage />} />
            <Route path="reviews" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </main>
  );
}
