import { ICartProps } from '../types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
      <Link to={'/modal/' + product.title} >
        <div>
          <img src={product.image} className="card-image" alt={product.title} />
        </div>
      </Link>
      <div>
        <h5>{product.title}</h5>
      </div>
      <p className="font-bold">{product.price}</p>
    </CartStyledDiv>
  );
};

export default CartsProduct;
