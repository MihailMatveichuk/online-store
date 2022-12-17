import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Purchase, IPurchase } from './Purchase';
import '../style.css';
import { SearchElement } from './Search';

import styled from 'styled-components';

const StyledUlCategories = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
const StyledLiCategory = styled.li`
  flex-direction: row;
  list-style-type: none;
  background-color: #f9f9f98d;
  padding: 13px 30px;
  border-radius: 30px;
  color: #230e70;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: bisque;
  }

  :active {
    background-color: darken(#f9f9f9, 5%);
  }

  .active {
    background-color: #282828;
    color: #fff;
  }
`;

const Purchases = () => {
  const [products, setProducts] = useState<IPurchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

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


  const categories = [
    'all',
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
  ];

  const [filtered, setFiltered] = useState(products);

  function filterCategory(category: string = 'all') {
    if (category === 'all') {
      setFiltered(products);
    } else {
      let newProducts = [...products].filter((el) => el.category === category);
      setFiltered(newProducts);
    }
  }
  function search() {
    return filtered.filter((el) => {
      return (
        el.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        el.description.toLowerCase().includes(inputValue.toLowerCase()) ||
        el.price == +inputValue ||
        el.category.toLowerCase().includes(inputValue.toLowerCase()) ||
        el.rating.rate == +inputValue ||
        el.rating.count == +inputValue
      );
    });
  }

  return (
    <div className="main-page">
      <SearchElement
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />

      <StyledUlCategories>
        {categories.map((categoryName, i) => (
          <StyledLiCategory
            onClick={() => filterCategory(categoryName)}
            key={i}
          >
            {categoryName}
          </StyledLiCategory>
        ))}
      </StyledUlCategories>

      <div className="cards_container">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">404</p>}
        {search().map((product) => (
          <Purchase product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Purchases;
