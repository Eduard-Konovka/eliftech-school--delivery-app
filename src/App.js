import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import fetchProduct from 'api/productApi';
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, obj) => acc + obj.cost, 0));
  }, [cart]);

  const handleShopsView = () => {
    setSending(false);
  };

  const hendleUser = obj => {
    setUser({ ...user, ...obj });
  };

  const addToCart = id => {
    const productDuplication = cart.filter(obj => obj.id === id);

    if (productDuplication.length > 0) {
      toast.error('This item is already in the cart!');
      return;
    }

    fetchProduct(id).then(product => {
      product.qwantity = 1;
      product.cost = product.price;
      setCart([...cart, product]);
    });
  };

  const removeFromCart = id => {
    const newCart = cart.filter(obj => obj.id !== id);
    setCart(newCart);
  };

  const changeQwantity = obj => {
    const setQwantity = item => {
      item.qwantity = Number(obj.qwantity);
      item.cost = obj.cost;
      return item;
    };

    setCart(
      cart.map(product =>
        product.id === obj.id ? setQwantity(product) : product,
      ),
    );
  };

  const submitCart = () => {
    if (!user.name) {
      toast.error('Fill in the client data in the field "Name"!');
      return;
    }

    if (!user.email) {
      toast.error('Fill in the client data in the field "Email"!');
      return;
    }

    if (!user.phone) {
      toast.error('Fill in the client data in the field "Phone"!');
      return;
    }

    if (!user.address) {
      toast.error('Fill in the client data in the field "Address"!');
      return;
    }

    setCart([]);
    setUser({});
    setSending(true);
    console.log(cart, totalPrice, user);
  };

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
          <Route
            path=""
            element={
              <ShopsView
                handleShopsView={handleShopsView}
                onClick={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartView
                user={user}
                setUser={hendleUser}
                sending={sending}
                cart={cart}
                totalPrice={totalPrice}
                onSelectQwantity={changeQwantity}
                onDeleteProduct={removeFromCart}
                onSubmit={submitCart}
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
