import Shop from 'components/Shop';
import s from './ShopsList.module.css';

export default function ShopsList({ shops, onClick }) {
  return (
    <ul className={s.list}>
      {shops.map(el => (
        <li key={el.id}>
          <Shop title={el.title} id={el.id} onClick={() => onClick(el.id)} />
        </li>
      ))}
    </ul>
  );
}
