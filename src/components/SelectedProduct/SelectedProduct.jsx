import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './SelectedProduct.module.css';
import defaultImage from './default.jpg';

export default function SelectedProduct({
  id,
  imageUrl,
  title,
  category,
  price,
  qwantity,
  onSelect,
  onClick,
}) {
  const handleSelect = e => {
    const obj = {};
    obj[id] = e.target.value;

    onSelect(obj);
  };

  return (
    <div className={s.container}>
      <img src={imageUrl ? imageUrl : defaultImage} alt={title} />
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <form className={s.form}>
        <label className={s.formItem}>Qwantity: </label>
        <select
          className={s.formItem}
          name="qwantity"
          id="qwantity"
          defaultValue={qwantity}
          onChange={handleSelect}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </form>
      <p>Стоимость: </p>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </div>
  );
}

SelectedProduct.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  qwantity: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
