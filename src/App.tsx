import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import {IPurchase} from './types'
import './style.css';
import Basket from './components/Basket';
import Purchases from './components/Purchases';

import Modal from './components/Modal';
import {  } from './components/Purchase';

export const App = () => {
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


export const App = () => {

  const [orders, setOrders] = useState<IPurchase[]>([]);

  function addToOrder(item: IPurchase) {
    setOrders([...orders, item]);
  }


  return (
    <div className="main-page">
      <Header orders ={orders}/>
      <Routes>

      
        <Route path="/modal/:id" element={<Modal products={products} />} />
        <Route path="/" element={<Purchases onAdd={addToOrder} products={products} loading = {loading} error ={error}/>} />

        <Route path="/basket" element={<Basket orders ={orders} />} />
       
      </Routes>
    </div>
  );
};
