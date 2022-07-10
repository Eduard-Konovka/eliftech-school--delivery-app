import { useState } from 'react';
import ShopsBar from 'components/ShopsBar';
import ProductsBar from 'components/ProductsBar';
import s from './ShopsView.module.css';

export default function ShopsView() {
  const [shopId, setShopId] = useState(1);

  return (
    <div className={s.shoppage}>
      <ShopsBar onClick={id => setShopId(id)} />
      <ProductsBar shopId={shopId} />
    </div>
  );
}
