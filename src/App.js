import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import Container from 'components/Container';
import AppBar from 'components/AppBar/AppBar';
import errorImage from 'pages/NotFoundView/error.jpg';
import 'App.css';

const ShopsView = lazy(() =>
  import('./pages/ShopsView/ShopsView.jsx' /* webpackChunkName: "ShopsView" */),
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '150px',
            }}
          >
            <Loader
              type="Puff"
              color="#00BFFF"
              height={200}
              width={200}
              timeout={3000}
            />
          </div>
        }
      >
        <Routes>
          <Route path="" element={<ShopsView />} />
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
