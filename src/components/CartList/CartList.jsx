import { useState } from 'react';
import PropTypes from 'prop-types';
import SelectedProduct from 'components/SelectedProduct';
import s from './CartList.module.css';

export default function CartList({ cart, onClick }) {
  const [qwantity, setQwantity] = useState({});

  const handleSelect = obj => {
    const aaa = qwantity;
    aaa.key = obj[0];
    // setQwantity(qwantity[obj]);
    console.log(aaa);
  };

  return (
    <ul className={s.list}>
      {cart.map(item => (
        <li key={item.id}>
          <SelectedProduct
            id={item.id}
            imageUrl={item.imgUrl}
            title={item.title}
            category={item.category}
            price={item.price}
            qwantity={qwantity[item.id]}
            onSelect={handleSelect}
            onClick={() => onClick(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
