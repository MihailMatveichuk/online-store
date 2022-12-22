import { IOrdersProps } from '../types';
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
export const Basket = ({ orders }: IOrdersProps) => {
  return (
    <BasketStyled>
      <CartsStyledDiv>
      {orders.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        orders.map((product) => <CartsProduct product={product} />)
      )}
           </CartsStyledDiv>
       <CartSummary/>
    </BasketStyled>
  );
};
