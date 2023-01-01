
import { useEffect, useState } from 'react';
import { IAppProps, IPurchase } from '../types';
import styled from 'styled-components';
import '../style.css';
import { SearchElement } from './Search';
import { Purchase } from './Purchase';
import Categories from './Categories';
import qs from 'qs';
import { useNavigate,useSearchParams } from 'react-router-dom';

import BoxNumberCards from './BoxNumberCards';


import DropdownSortPrice from './DropdownPrice';
import DropdownSortRating from './DropdownRating';


const SearchAndGridRow = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const GridIcon = styled.div`
  display: flex;
  column-gap: 20px;
`;
const Purchases = ({
  products,
  onAdd,
  onDelete,
  loading,
  error,
  orders,
}: IAppProps) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue.length)
  const [widthValue, setWidthValue] = useState({ width: '420px' });
  const StyleCard = styled.div`
    ${widthValue}
  `;
  const [filtered, setFiltered] = useState(products);
  const [params,setParams] = useSearchParams()
  const categoryQuery = params.get('category') || '';


  console.log('filtered: ', filtered);

  // useEffect(() => {
  //   if (categoryQuery.length > 0 ) {
  //     // const params = qs.parse(window.location.search.substring(1));
  //     // console.log('params: ', params);
  //     let newProducts = [...products].filter((el) => el.category === categoryQuery);
  //     setFiltered(newProducts);
  //   }
  // }, []);


  function filterCategory(category: string ) {
      setParams({category:category})
    //   let newProducts = [...products].filter((el) => el.category === categoryQuery);
    //   setFiltered(newProducts);
    //  console.log('aaaaaaaaaaaaaa',params);
    if(category === 'all'){
      // let newProducts = [...products].filter((el) => el.category === categoryQuery);
      // setFiltered(newProducts);
      // params.delete('category')
      // console.log('categoryQuery))))))))))))))))))): ', categoryQuery);
      //setProducts
    }
   else {
      let newProducts = [...products].filter((el) => el.category === category);
      setFiltered(newProducts);
    }
  }


  function sortPriceUp(){
    const tempUp = JSON.parse(JSON.stringify(products))
    const newTempUp = tempUp.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price)
    setFiltered(newTempUp);
  }

  function sortPriceDown(item: IPurchase[]){
    const tempDown = JSON.parse(JSON.stringify(products))
    const newTempDown = tempDown.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price)
    setFiltered(newTempDown);
  }

  function sortRatingUp(item: IPurchase[]){
    const tempDown = JSON.parse(JSON.stringify(filtered))
    const newTempDown = tempDown.sort((a: {
      rating: any; rate: number;
      }, b: {
            rating: any; rate: number;
      }) => a.rating.rate - b.rating.rate)
          setFiltered(newTempDown);
  }

  function sortRatingDown(item: IPurchase[]){
    const tempDown = JSON.parse(JSON.stringify(filtered))
    const newTempDown = tempDown.sort((a: {
      rating: any; rate: number;
      }, b: {
            rating: any; rate: number;
      }) => b.rating.rate - a.rating.rate)
          setFiltered(newTempDown);
  }


  function search() {
    // if (categoryQuery.length > 0) { setFiltered([...products].filter((el) => el.category === categoryQuery))}
    return products.filter((el) => {
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
// const tets = products.filter((el) => el.category === filtered[0]?.category)
//   useEffect(() => {
//     const queryString = qs.stringify({
//       category: filtered[0]?.category,
//     });
//     console.log(queryString);
//     navigate(`?${queryString}`);
//   }, []);

  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     category: 'cat',
  //   });
  //   console.log(queryString);
  //   navigate(`?${queryString}`);
  // }, []);

console.log('paraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaams', params)
console.log('queryCATEGoooory',categoryQuery.length);
;


  return (
    <div className="main-page">
      <SearchAndGridRow>
        <SearchElement
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />

        <BoxNumberCards filtered = {filtered}/>

        <DropdownSortPrice
          filtered = {filtered}
          onSortUp = {sortPriceUp}
          onSortDown ={sortPriceDown}
          onFilter={filterCategory}/>
        <DropdownSortRating
          filtered = {filtered}
          onSortUp = {sortRatingUp}
          onSortDown ={sortRatingDown} />

        <GridIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="grid"
            viewBox="0 0 16 16"
            onClick={() => setWidthValue({ width: '340px' })}
          >
            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="grid"
            viewBox="0 0 16 16"
            onClick={() => setWidthValue({ width: '420px' })}
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </GridIcon>
      </SearchAndGridRow>
      <Categories onFilter={filterCategory} />
      <div className="cards_container">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">404</p>}
        {loading === false && categoryQuery.length < 4  ? (

            search().map((product) => (
              <StyleCard>
                <Purchase onAdd={onAdd} onDelete ={onDelete} product={product} orders={orders} key={product.id} />
              </StyleCard>
            ))
        ) : (
          search().filter((el) => el.category === categoryQuery).map((product) => (
              <StyleCard>
                <Purchase onAdd={onAdd} onDelete ={onDelete} product={product} orders={orders} key={product.id} />
              </StyleCard>

          ))
        )}
      </div>
    </div>
  );
};

export default Purchases;
