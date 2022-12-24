import { ICartProps } from '../types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Clicker } from '../Clicker';

const CartStyledDiv = styled.div`
  border: 2px solid palevioletred;
  border-radius: 3px;
  column-gap: 1em;
  margin: 1em;
  padding: 1em;
  display: flex;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const CartsProduct = ({ product }: ICartProps) => {
  return (
    <CartStyledDiv>
      <Link to={'/modal/' + product.title} >
        <div>
          <img src={product.image} className="card-image" alt={product.title} />
        </div>
      </Link>
      <CardDescription>
        <h5>{product.title}</h5>
        <p style={{
          
        }}>{product.price + "$"}</p>
        <Clicker/>
      </CardDescription>
    </CartStyledDiv>
  );
};

export default CartsProduct;
