import styled from 'styled-components';
import {IPurchase} from '../types'

const SummaryStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  padding: 5em;
  background: bisque;
  color: black;
  border-radius: 8px;
  font-size: 20px;
  max-height: 500px;
`;
const BuyButtonStyled = styled.button`

  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 1.2em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const InputStyled = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const CartSummary = () => {
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');
  const totalPrice:number = ordersStorage.reduce((sum:number,el:IPurchase) => sum +=el.price,0)

  return (
    <SummaryStyledDiv>
      <div>Products: {ordersStorage.length}</div>
      <div>Total: $ {totalPrice} </div>
      <InputStyled placeholder="Enter promo-code" />
      <BuyButtonStyled> BUY NOW </BuyButtonStyled>
    </SummaryStyledDiv>
  );
};

export default CartSummary;
