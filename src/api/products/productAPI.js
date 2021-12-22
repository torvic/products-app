const URL_BASE = 'https://fakestoreapi.com';

// prettier-ignore
export const getProducts = () => fetch(`${URL_BASE}/products`).then((res) => res.json());

// prettier-ignore
export const getProduct = (productId) => fetch(`${URL_BASE}/products/${productId}`).then((res) => res.json());
