import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchProducts from 'api/productsApi';
import Spinner from 'components/Spinner';
import ProductsList from 'components/ProductsList';
import Blank from 'components/Blank';
import imageBlank from 'images/shop.jpg';
import s from './ProductsBar.module.css';

export default function ProductsBar({ shopId, onClick }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
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
      {loading && <Spinner size={70} color="blue" />}
      {error && (
        <p className={s.error}>Whoops, something went wrong: {error.message}</p>
      )}
      {!loading && !error && shopId === null && (
        <Blank title="Choose a shop" image={imageBlank} alt="Open shop" />
      )}
      {products.length > 0 && (
        <ProductsList products={products} shopId={shopId} onClick={onClick} />
      )}
    </div>
  );
}

ProductsBar.propTypes = {
  shopId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
