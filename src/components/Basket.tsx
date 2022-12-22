import CartsProduct from './CartsProduct';
import CartSummary from './CartSummary';
import styled from 'styled-components';
export interface IPurchase {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface IOrdersProps {
  orders: IPurchase[];
}

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
