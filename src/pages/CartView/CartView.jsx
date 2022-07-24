import PropTypes from 'prop-types';
import UserBar from 'components/UserBar';
import CartBar from 'components/CartBar';
import s from './CartView.module.css';

export default function CartView({
  cart,
  totalPrice,
  onSelectQwantity,
  onDeleteProduct,
  onSubmit,
}) {
  return (
    <div className={s.cartpage}>
      <UserBar />
      <CartBar
        cart={cart}
        totalPrice={totalPrice}
        onSelectQwantity={onSelectQwantity}
        onDeleteProduct={onDeleteProduct}
        onSubmit={onSubmit}
      />
    </div>
  );
}

CartView.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  totalPrice: PropTypes.number.isRequired,
  onSelectQwantity: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
