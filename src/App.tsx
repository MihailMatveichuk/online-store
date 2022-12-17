import Header from './components/Header'
import axios, {AxiosError}from 'axios';
import React, {useEffect, useState} from 'react';
import { Purchase, IPurchase } from './components/Purchase';
import './style.css'
import { SearchElement } from './components/Search';

export const App = () => {
  const [products, setProducts] = useState<IPurchase[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState("");

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

  function search (){
    return products.filter((el) => {
      return el.title.toLowerCase().includes(inputValue.toLowerCase()) || 
      el.description.toLowerCase().includes(inputValue.toLowerCase()) || 
      el.price == +inputValue || el.category.toLowerCase().includes(inputValue.toLowerCase()) || 
      el.rating.rate == +inputValue || el.rating.count == +inputValue;
    });
  }


  return (
    <div className="main-page">
      <Header />
      <SearchElement onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }} />
        <div className='cards_container'>
          {loading && <p className='text-center'>Loading...</p>}
          {error && <p className='text-center text-red-600'>404</p>}
          {search().map(product => <Purchase product={product} key = {product.id}/>)}   
        </div>
      </div>
    )
  }
