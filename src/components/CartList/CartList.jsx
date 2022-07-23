import PropTypes from 'prop-types';
import SelectedProduct from 'components/SelectedProduct';
import s from './CartList.module.css';

export default function CartList({
  cart,
  qwantityList,
  onSelectQwantityList,
  onClick,
}) {
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
            qwantity={qwantityList[item.id]}
            onSelect={onSelectQwantityList}
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
