
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Purchase, IPurchase } from './Purchase';
const Purchases = () => {
  const [products, setProducts] = useState<IPurchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IPurchase[]>(
        'https://fakestoreapi.com/products?limit=20'
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="cards_container">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-600">404</p>}
          {products.map((product) => (
            <Purchase product={product} key={product.id} />
          ))}
        </div>
  );
};

export default Purchases;
