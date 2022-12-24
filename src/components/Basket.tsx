import { IBasketProps } from '../types';
import CartsProduct from './CartsProduct';
import CartSummary from './CartSummary';
import styled from 'styled-components';

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

  return (
    <BasketStyled>
      <CartsStyledDiv>
      {orders.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        orders.filter((el, ind) => ind === orders.indexOf(el)).map((product) => <CartsProduct onAdd={onAdd} onDelete={onDelete} product={product} orders ={orders} />)
      )}
           </CartsStyledDiv>
       <CartSummary/>
    </BasketStyled>
  );
};
