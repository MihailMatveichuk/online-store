import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import './style.css';
import { Basket } from './components/Basket';
import Purchases from './components/Purchases';
import { useState } from 'react';
import { IPurchase } from './components/Purchase';

export const App = () => {

  const [orders, setOrders] = useState<IPurchase[]>([]);

  function addToOrder(item: IPurchase) {
    setOrders([...orders, item]);
  }

  return (
    <div className="main-page">
      <Header orders ={orders}/>
      <Routes>
        <Route path="/basket" element={<Basket orders ={orders} />} />
        <Route path="/" element={<Purchases onAdd={addToOrder} />} />
      </Routes>
    </div>
  );
};
