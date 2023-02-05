import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchShops from 'api/shopsApi';
import Spinner from 'components/Spinner';
import ShopsList from 'components/ShopsList';
import s from './ShopsBar.module.css';

export default function ShopsBar({ onClick }) {
  const [loading, setLoading] = useState(false);
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchShops()
      .then(shops => setShops(shops))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={s.shopsbar}>
      Shops:
      {loading && <Spinner size={70} color="blue" />}
      {error && (
        <p className={s.error}>Whoops, something went wrong: {error.message}</p>
      )}
      {shops.length > 0 && <ShopsList shops={shops} onClick={onClick} />}
    </div>
  );
}

ShopsBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
