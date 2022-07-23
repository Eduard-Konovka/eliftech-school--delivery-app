import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import fetchProduct from 'api/productApi';
import Loader from 'react-loader-spinner';
import Container from 'components/Container';
import AppBar from 'components/AppBar/AppBar';
import errorImage from 'pages/NotFoundView/error.jpg';
import 'api/baseUrl';
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
  const [cart, setCart] = useState([]);
  const [qwantityList, setQwantityList] = useState({});

  const addToCart = id => {
    const productDuplication = cart.filter(obj => obj.id === id);

    if (productDuplication.length > 0) {
      toast.error('This item is already in the cart!');
      return;
    }

    fetchProduct(id).then(product => {
      setCart([...cart, product]);
    });
  };

  const removeFromCart = id => {
    const newCart = cart.filter(obj => obj.id !== id);
    setCart(newCart);
  };

  const changeQwantityList = obj => {
    setQwantityList({ ...qwantityList, ...obj });
  };

  useEffect(() => {
    console.log(qwantityList);
  }, [qwantityList]);

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
          <Route path="" element={<ShopsView onClick={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartView
                cart={cart}
                qwantityList={qwantityList}
                onSelectQwantityList={changeQwantityList}
                onClick={removeFromCart}
              />
            }
          />
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
