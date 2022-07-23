import UserBar from 'components/UserBar';
import CartBar from 'components/CartBar';
import s from './CartView.module.css';

export default function CartView({
  cart,
  qwantityList,
  onSelectQwantityList,
  onClick,
}) {
  return (
    <div className={s.cartpage}>
      <UserBar />
      <CartBar
        cart={cart}
        qwantityList={qwantityList}
        onSelectQwantityList={onSelectQwantityList}
        onClick={onClick}
      />
    </div>
  );
}
