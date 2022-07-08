import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import errorImage from './pages/NotFoundView/error.jpg';
import './App.css';

const ShopView = lazy(() =>
  import('./pages/ShopView/ShopView.jsx' /* webpackChunkName: "ShopView" */),
);
const CartView = lazy(() =>
  import('./pages/CartView/CartView.jsx' /* webpackChunkName: "CartView" */),
);
const NotFoundView = lazy(() =>
  import(
    './pages/NotFoundView/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */
  ),
);

export default function App() {
  return (
    <Container title="Delivery App">
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Routes>
          <Route path="" element={<ShopView />} />
          <Route path="/cart" element={<CartView />} />
          <Route
            path="*"
            element={
              <NotFoundView
                errorImage={errorImage}
                messadge="Page not found :("
              />
            }
          />
        </Routes>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
