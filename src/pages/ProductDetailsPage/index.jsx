import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../common/Container';
import { getProduct } from '../../api/products/productAPI';
import Card from '../../common/Card';
import styles from './index.module.scss';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    const retrieveProduct = async () => {
      try {
        const data = await getProduct(productId);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    retrieveProduct();
  }, []);

  return (
    <Container>
      {loading && <div>Cargando...</div>}
      {error && <div>Ocurrio un error...</div>}
      {product && (
        <Card className={styles.details}>
          <figure className={styles.details__figure}>
            <img
              className={styles.details__image}
              src={product.image}
              alt={product.title}
            />
          </figure>
          <div className={styles.details__description}>
            <h3>{product.title}</h3>
            <span>{product.category}</span>
            <p>{product.description}</p>
            <ul>
              <li>
                Price:
                {product.price}
              </li>
              <li>
                Raiting:
                {product.rating.rate}
              </li>
              <li>
                Quantity:
                {product.rating.count}
              </li>
            </ul>
          </div>
        </Card>
      )}
    </Container>
  );
};

export default ProductDetailsPage;
