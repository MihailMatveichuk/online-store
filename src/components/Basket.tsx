import { IBasketProps } from '../types';
import CartsProduct from './CartsProduct';
import CartSummary from './CartSummary';
import styled from 'styled-components';

import Breadcrumbs from './Breadcrumbs';

import Pagination from './Pagination';
import { useState } from 'react';


const BasketStyled = styled.div`
  display: flex;
`;
const CartsStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Basket = ({ onAdd, onDelete, orders }: IBasketProps) => {
  localStorage.setItem('orders', JSON.stringify(orders));
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(3);
  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;

  const uniqePurchases = orders.filter((el, ind) => ind === orders.indexOf(el));
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

        {orders && (
          <>
            <Pagination
              paginate={paginate}
              ordersPerPage={ordersPerPage}
              uniqePurchases={uniqePurchases}
            />
            <button className="btn btn-primary" onClick={prevPage}>
              Prev Page
            </button>
            <button className="btn btn-primary mt-3" onClick={nextPage}>
              Next Page
            </button>
          </>
        )}
        {orders.length === 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          currentOrders.map((product) => (
            <CartsProduct
              onAdd={onAdd}
              onDelete={onDelete}
              product={product}
              orders={orders}
            />
          ))
        )}
      </CartsStyledDiv>
      <CartSummary />

    </BasketStyled>
    </>
  );
};
