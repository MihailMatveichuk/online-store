import styled from 'styled-components';

const SummaryStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  padding: 5em;
  background: darkcyan;
  color: gold;
  border-radius: 8px;
  font-size: 20px;
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
  return (
    <SummaryStyledDiv>
      <div>Products:</div>
      <div>Total:</div>
      <InputStyled placeholder="Enter promo-code" />
      <BuyButtonStyled> BUY NOW </BuyButtonStyled>
    </SummaryStyledDiv>
  );
};

export default CartSummary;
