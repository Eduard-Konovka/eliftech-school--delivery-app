import Shop from '../../components/Shop';
import s from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className={s.sidebar}>
      Shops:
      <Shop title="Shop 1" />
      <Shop title="Shop 2" />
      <Shop title="Shop 3" />
      <Shop title="Shop 4" />
      <Shop title="Shop 5" />
    </div>
  );
}
