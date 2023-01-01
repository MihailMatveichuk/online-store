import { Routes, Route, HashRouter, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IPurchase } from './types';
import './style.css';
import Header from './components/Header';
import { Basket } from './components/Basket';
import OrderForm from './components/OrderForm';
import Purchases from './components/Purchases';
import Modal from './components/Modal';
import { data } from './data';
import Error from './components/Error';
import { Clicker } from './Clicker';

export const App = () => {
  const [products, setProducts] = useState<IPurchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [orders, setOrders] = useState<IPurchase[]>([]);

  function addToOrder(item: IPurchase) {
    setOrders([...orders, item]);
  }

  function deleteToOrder(item: IPurchase) {
    setOrders(() => orders.filter((_, i) => i !== orders.indexOf(item)));
  }

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      // const response = await axios.get<IPurchase[]>(
      //   'https://fakestoreapi.com/products?limit=20'
      // );
      setProducts(data);
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
    <div className="main-page">
      <Header orders={orders} />
      <Routes>
        <Route
         path='/'
          element={
            <Purchases
              onAdd={addToOrder}
              onDelete={deleteToOrder}
              orders={orders}
              products={products}
              loading={loading}
              error={error}
            />
          }
        />

        <Route
          path="modal/:title"
          element={
            <Modal
              onAdd={addToOrder}
              onDelete={deleteToOrder}
              products={products}
              orders={orders}
              setProducts={setProducts}
            />
          }
        />

        <Route
          path="basket"
          element={
            <Basket
              onAdd={addToOrder}
              onDelete={deleteToOrder}
              orders={orders}
            />
          }
        />
        <Route
          path="orderForm"
          element={<OrderForm toggle={() => void {}} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
