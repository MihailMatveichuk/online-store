import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import './style.css';
import { Basket } from './components/Basket';
import Purchases from './components/Purchases';

export const App = () => {
  return (
    <div className="main-page">
      <Header />
      <Routes>
        <Route path="/basket" element={<Basket />} />
        <Route path="/" element={<Purchases />} />
      </Routes>
    </div>
  );
};
