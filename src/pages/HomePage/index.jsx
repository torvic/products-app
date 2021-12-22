import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import { getProducts } from '../../api/products/productAPI';
import Container from '../../common/Container';

const HomePage = () => {
  const [dbProducts, setDbProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getAllProducts = async () => {
      try {
        const products = await getProducts();
        setDbProducts(products);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    getAllProducts();
  }, []);
  return (
    <Container>
      {loading && <div>Cargando...</div>}
      {error && <div>Ocurrio un error...</div>}
      {dbProducts && <ProductList items={dbProducts} />}
    </Container>
  );
};

export default HomePage;
