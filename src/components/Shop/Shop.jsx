import s from './Shop.module.css';

export default function Shop({ title }) {
  return <button className={s.shop}>{title}</button>;
}
