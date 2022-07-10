import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './Product.module.css';
import defaultImage from './default.jpg';

export default function Product({
  imageUrl = defaultImage,
  title,
  description,
  category,
  price,
}) {
  return (
    <div className={s.container}>
      <img src={imageUrl ?? defaultImage} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <Button type="button" onClick={null}>
        Add to Cart
      </Button>
    </div>
  );
}

Product.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
