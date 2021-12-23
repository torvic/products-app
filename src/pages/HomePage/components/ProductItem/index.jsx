import { Link } from 'react-router-dom';
import Card from '../../../../common/Card';
import useRandomTimer from '../../../../hooks/useRandomTimer';
import styles from './index.module.scss';

const ProductItem = (props) => {
  const { product } = props;
  const { disabled, timerHours, timerMinutes, timerSeconds } = useRandomTimer();
  return (
    <div className={styles.product}>
      <Card>
        <div className={styles.product__content}>
          <figure className={styles.product__figure}>
            <img className={styles.product__image} src={product.image} alt="" />
          </figure>
          <p className={styles.product__info}>{product.title}</p>
          <div className={styles.product__actions}>
            <div className={styles.product__timer}>
              <span>{`${timerHours}:${timerMinutes}:${timerSeconds}`}</span>
            </div>
            <Link
              to={`/products/${product.id}`}
              className={disabled ? `${styles.product__button}` : ''}
            >
              Go To details
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
