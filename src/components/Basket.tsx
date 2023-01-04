import { IBasketProps, IPurchase } from '../types';
import CartsProduct from './CartsProduct';
import CartSummary from './CartSummary';
import styled from 'styled-components';
import qs from 'qs';

import Breadcrumbs from './Breadcrumbs';

import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BasketStyled = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const CartsStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const PaginationButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`

export const Basket = ({ onAdd, onDelete, orders, prop, openOrderForm }: IBasketProps) => {
  // localStorage.setItem('orders', JSON.stringify(orders));
  const ordersStorage:IPurchase[] = JSON.parse(localStorage.getItem('orders') || '{}');
  console.log('ordersStorage: in BASKET ', ordersStorage);
  //const totalPrice:number = ordersStorage.reduce((sum:number,el:IPurchase) => sum +=el.price,0)
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(3);
  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;
  //const uniqePurchases = orders?.filter((el, ind) => ind === orders.indexOf(el));
  // function unique(arr) {
  //   // let result = [];
  //   // console.log('result: ', result);

  //   // for (let str of arr) {
  //   //   console.log('str: ', str);
  //   //   if (!result.includes(str)) {
  //   //     result.push(str);
  //   //   }
  //   // }

  //   // return result;
  //   return Array.from(new Set(arr))
  // }
   //const uniqePurchases = ordersStorage?.filter((el, ind) => ind !== ordersStorage.indexOf(el.id));
   //let uniqePurchases = ordersStorage.filter((v, i, s) => s.indexOf(v) === s.lastIndexOf(v));
   const uniqePurchases =Array.from(new Set(ordersStorage.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
   //setOrders(() => orders.filter((_, i) => i !== orders.indexOf(item)));

  //const uniqePurchases = unique(ordersStorage)
  console.log('uniqePurchases: ', uniqePurchases);
  const currentOrders = uniqePurchases.slice(firstOrderIndex, lastOrderIndex);
  const nextPage = () =>
    setCurrentPage((prev) =>
      prev === Math.ceil(uniqePurchases.length / ordersPerPage)
        ? prev
        : prev + 1
    );
  const prevPage = () =>
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  const paginate = (pageNum: number) => setCurrentPage(pageNum);




  return (
    <>
    <Breadcrumbs />
    <BasketStyled>
      <CartsStyledDiv>
        {ordersStorage.length === 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          currentOrders?.map((product:IPurchase) => (
            <CartsProduct
              onAdd={onAdd}
              onDelete={onDelete}
              product={product}
              orders={orders}
            />
          ))
        )}

        {orders && (
          <>
            <Pagination
              paginate={paginate}
              ordersPerPage={ordersPerPage}
              setOrdersPerPage = {setOrdersPerPage}
              uniqePurchases={uniqePurchases}
            />
            <PaginationButton>
              <button className="btn btn-primary mt-3" onClick={prevPage}>
                Prev Page
              </button>
              <button className="btn btn-primary mt-3" onClick={nextPage}>
                Next Page
              </button>
            </PaginationButton>
          </>
        )}
      </CartsStyledDiv>
      <CartSummary prop = {prop} openOrderForm ={openOrderForm}/>
    </BasketStyled>
    </>
  );
};
