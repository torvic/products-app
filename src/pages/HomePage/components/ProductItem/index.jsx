import { Link } from 'react-router-dom';
import Card from '../../../../common/Card';
import useRandomTimer from '../../../../hooks/useRandomTimer';
import styles from './index.module.scss';

const ProductItem = (props) => {
  const { product } = props;
  const { disabled, timerHours, timerMinutes, timerSeconds } = useRandomTimer();
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
              <span>{`${timerHours}:${timerMinutes}:${timerSeconds}`}</span>
            </div>
            <Link
              to={`/products/${product.id}`}
              className={styles.product__button}
              type="button"
              disabled={disabled}
            >
              Go To details
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductItem;
