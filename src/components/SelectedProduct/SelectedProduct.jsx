import PropTypes from 'prop-types';
import Button from 'components/Button';
import defaultImage from './default.jpg';
import s from './SelectedProduct.module.css';

export default function SelectedProduct({
  _id,
  imageUrl,
  title,
  category,
  price,
  qwantity,
  cost,
  onSelectQwantity,
  onDeleteProduct,
}) {
  const handleSelect = e => {
    const obj = {
      _id,
      qwantity: e.target.value,
      cost: price * e.target.value,
    };

    onSelectQwantity(obj);
  };

  return (
    <div className={s.container}>
      <img src={imageUrl ? imageUrl : defaultImage} alt={title} />
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <form className={s.form} onChange={handleSelect}>
        <label className={s.formItem}>Qwantity: </label>
        <select
          className={s.formItem}
          name="qwantity"
          id="qwantity"
          defaultValue={qwantity}
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
      <p>Cost: ${cost}</p>
      <Button type="button" onClick={onDeleteProduct}>
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
  qwantity: PropTypes.number,
  cost: PropTypes.number,
  onSelectQwantity: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
