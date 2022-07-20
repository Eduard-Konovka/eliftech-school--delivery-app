import UserBar from 'components/UserBar';
import CartBar from 'components/CartBar';
import s from './CartView.module.css';

export default function CartView({ cart, onClick }) {
  return (
    <div className={s.cartpage}>
      <UserBar />
      <CartBar cart={cart} onClick={onClick} />
    </div>
  );
}
