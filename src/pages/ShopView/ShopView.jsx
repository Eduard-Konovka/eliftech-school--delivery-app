import SideBar from '../../components/SideBar';
import Products from '../../components/Products';
import s from './ShopView.module.css';

export default function ShopView() {
  return (
    <div className={s.shoppage}>
      <SideBar />
      <Products />
    </div>
  );
}
