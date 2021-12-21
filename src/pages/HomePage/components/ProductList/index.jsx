import ProductItem from '../ProductItem';

import styles from './index.module.scss';

const ProductList = (props) => {
  const { items } = props;
  return (
    <div className={styles.list}>
      {items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
