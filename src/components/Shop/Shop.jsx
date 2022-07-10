import s from './Shop.module.css';

export default function Shop({ title, onClick }) {
  return (
    <button className={s.shop} type="button" onClick={() => onClick()}>
      {title}
    </button>
  );
}
