import { useState, useEffect } from 'react';
import fetchProducts from 'api/productsApi';
import Spinner from 'components/Spinner';
import ProductsList from 'components/ProductsList';
import Blank from 'components/Blank';
import imageBlank from 'images/cartEmpty.jpg';
import s from './CartBar.module.css';

export default function CartBar({ shopId = null }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchProducts()
      .then(products => {
        setProducts(products);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={s.cartbar}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Spinner size={70} color="blue" />}
      {shopId === null && (
        <Blank title="Your cart is empty" image={imageBlank} alt="Empty cart" />
      )}
      {products.length > 0 && (
        <ProductsList products={products} shopId={shopId} />
      )}
    </div>
  );
}
