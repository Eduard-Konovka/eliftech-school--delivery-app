import PropTypes from 'prop-types';
import Product from 'components/Product';
import s from './ProductsList.module.css';

export default function ProductsList({ products = [], shopId, onClick }) {
  const shopProducts = products.filter(obj => obj.shopId === shopId);

  return (
    <ul className={s.list}>
      {shopProducts.map(item => (
        <li key={item.id}>
          <Product
            imageUrl={item.imgUrl}
            title={item.title}
            description={item.descr}
            category={item.category}
            price={item.price}
            onClick={() => onClick(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  shopId: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
