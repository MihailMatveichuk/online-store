import { Routes, Route } from 'react-router-dom';
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
import { Footer } from './components/Footer';

export const App = () => {
  const [products, setProducts] = useState<IPurchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<IPurchase[]>([]);
  const [prop, setProp] = useState(false);

  function addToOrder(item: IPurchase) {
    let allRows = [];
    if (localStorage.getItem('orders'))
      allRows = JSON.parse(localStorage.getItem('orders') || '{}');
    allRows.push(item);
    localStorage.setItem('orders', JSON.stringify(allRows));
    setOrders([...orders, item]);
  }

  function deleteToOrder(item: IPurchase) {
    const stringifyedItem: string = JSON.stringify(item);
    setOrders(() => orders.filter((_, i) => i !== orders.indexOf(item)));
    const allRows = JSON.parse(localStorage.getItem('orders') || '{}');
    const arrStringifyedItems = allRows.map((el: IPurchase) =>
      JSON.stringify(el)
    );
    const withDeleted = arrStringifyedItems.filter(
      (_: boolean, i: number, arr: string[]) =>
        i !== arr.indexOf(stringifyedItem)
    );
    const parseForStorage = withDeleted.map((el: string) => JSON.parse(el));
    localStorage.setItem('orders', JSON.stringify(parseForStorage));
  }

  const openOrderForm = (item = false) => {
    setProp(item);
  };

  function fetchProducts() {
    if (data) {
      setLoading(true);
      setProducts(data);
    }
    setLoading(false);
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
            />
          }
        />
        <Route
          path="/modal/:title"
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
          path="/basket"
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
          path="/orderForm"
          element={<OrderForm toggle={() => void {}} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};
