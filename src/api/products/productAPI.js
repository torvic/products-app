const URL_BASE = 'https://fakestoreapi.com';

// prettier-ignore
const getProducts = () => fetch(`${URL_BASE}/products`).then((res) => res.json());

export default getProducts;
