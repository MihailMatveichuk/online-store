import { Routes, Route } from 'react-router-dom';
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

export const App = () => {
  const [products, setProducts] = useState<IPurchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [orders, setOrders] = useState<IPurchase[]>([]);
  const [prop, setProp] = useState(false);

  function addToOrder(item: IPurchase) {
    setOrders([...orders, item]);
    let allRows = [];
    if (localStorage.getItem('orders'))
      allRows = JSON.parse(localStorage.getItem('orders') || '{}');
    allRows.push(item);
    localStorage.setItem('orders', JSON.stringify(allRows));
  }

  function deleteToOrder(item: IPurchase) {
    setOrders(() => orders.filter((_, i) => i !== orders.indexOf(item)));
    let allRows = JSON.parse(localStorage.getItem('orders') || '{}');
     let withDeleted = allRows.filter((el: IPurchase) => el.id !== item.id);
    // const withDeleted = allRows?.filter((el:IPurchase, ind:number) => ind === (allRows.indexOf(el.id -1)));
    //const withDeleted = allRows?.filter((_, i) => i == allRows.indexOf(item.id - 1));

    localStorage.setItem('orders', JSON.stringify(withDeleted));
  }

  const openOrderForm = (item: boolean = false) => {
    setProp(item);
  };

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
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
          path="/"
          element={
            <Purchases
              onAdd={addToOrder}
              onDelete={deleteToOrder}
              products={products}
              orders={orders}
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
              openOrderForm={openOrderForm}
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
              openOrderForm={openOrderForm}
              prop={prop}
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
