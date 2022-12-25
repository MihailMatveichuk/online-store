import { IBasketProps } from '../types';
import CartsProduct from './CartsProduct';
import CartSummary from './CartSummary';
import styled from 'styled-components';
import Pagination from './Pagination';
import { useState } from 'react';

const BasketStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CartsStyledDiv = styled.div`
 display: flex;
 flex-direction:column;
`


export const Basket = ({ onAdd, onDelete, orders }: IBasketProps) => {

 localStorage.setItem('orders',JSON.stringify(orders));
 const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(2);
  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');

  const uniqePurchases = orders.filter((el, ind) => ind === orders.indexOf(el));
  const currentOrders = uniqePurchases.slice(firstOrderIndex, lastOrderIndex);

  const paginate = (pageNum: number) => setCurrentPage(pageNum);
  return (
    <BasketStyled>
      <CartsStyledDiv>
      <Pagination paginate={paginate} ordersPerPage={ordersPerPage}/>
      {orders.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        currentOrders.map((product) => <CartsProduct onAdd={onAdd} onDelete={onDelete} product={product} orders ={orders} />)
      )}
           </CartsStyledDiv>
       <CartSummary/>
    </BasketStyled>
  );
};
