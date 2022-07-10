import { useState, useEffect } from 'react';
import fetchProducts from 'api/productsApi';
import Spinner from 'components/Spinner';
import ProductsList from 'components/ProductsList';
import s from './ProductsBar.module.css';

export default function ProductsBar({ shopId }) {
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
    <div className={s.productsbar}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Spinner size={70} color="blue" />}
      {products.length > 0 && (
        <ProductsList products={products} shopId={shopId} />
      )}
    </div>
  );
}
