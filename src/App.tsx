// <<<<<<< HEAD
// import { StyleDiv } from './style';

// import LOGO from './assets/logo.png';
// import Products from './components/Products';

// export const App = () => {
//   return (
//     <>
//       <StyleDiv />
//       <h1>React start </h1>
//       <img src={LOGO} alt="logo" width="200" height="200" />

//       <Products />
//     </>
//   );
// };

import Header from './components/Header'
import axios, {AxiosError}from 'axios';
import React, {useEffect, useState} from 'react';
import { Purchase, IPurchase } from './components/Purchase';
import './style.css'

export const App = () => {
  const [products, setProducts] = useState<IPurchase[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try{
      setError('')
      setLoading(true)
      const response = await axios.get<IPurchase[]>('https://fakestoreapi.com/products?limit=20')
      setProducts(response.data)
      setLoading(false)
    }
    catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(()=>{
    fetchProducts()
  }, [])

  return (
    <div className="main-page">
      <Header />
      <div className='cards_container'>
        {loading && <p className='text-center'>Loading...</p>}
        {error && <p className='text-center text-red-600'>404</p>}
        {products.map(product => <Purchase product={product} key = {product.id}/>)}
      </div>
      {/* <Clicker /> */}
      </div>
    )
  }
