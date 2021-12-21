import Card from '../../../../common/Card';
import styles from './index.module.scss';

const ProductItem = (props) => {
  const { product } = props;
  return (
    <div className={styles.product}>
      <div className={styles.product__content}>
        <Card>
          <figure className={styles.product__figure}>
            <img className={styles.product__image} src={product.image} alt="" />
          </figure>

          <p className={styles.product__info}>{product.title}</p>
          <div className={styles.product__actions}>
            <div className={styles.product__timer}>
              <span>00:00:00</span>
            </div>
            <button className={styles.product__button} type="button">
              Go To details
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductItem;
