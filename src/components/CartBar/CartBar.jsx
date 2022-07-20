import PropTypes from 'prop-types';
import CartList from 'components/CartList';
import Blank from 'components/Blank';
import imageBlank from 'images/cartEmpty.jpg';
import s from './CartBar.module.css';

export default function CartBar({ cart, onClick }) {
  return (
    <div className={s.cartbar}>
      {cart.length > 0 ? (
        <CartList cart={cart} onClick={onClick} />
      ) : (
        <Blank title="Your cart is empty" image={imageBlank} alt="Empty cart" />
      )}
    </div>
  );
}

CartBar.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
