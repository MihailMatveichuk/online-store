import { ICartProps } from '../types';
import styled from 'styled-components';

const CartStyledDiv = styled.div`
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 1em;
  padding: 1em;
  display: flex;
`;
const CartsProduct = ({ product }: ICartProps) => {
  return (
    <CartStyledDiv>
      <div>
        <img src={product.image} className="card-image" alt={product.title} />
      </div>
      <div>
        <h5>{product.title}</h5>
      </div>
      <p className="font-bold">{product.price}</p>
    </CartStyledDiv>
  );
};

export default CartsProduct;
