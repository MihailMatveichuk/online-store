import { ICartProps } from '../types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { useState } from 'react';

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  & p {
    margin: 20px;
    margin-bottom: -10px;
  }
`;
const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;


const CartStyledDiv = styled.div`
  border: 2px solid bisque;
  border-radius: 7px;
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;
const CartsProduct = ({ product }: ICartProps) => {
  const [count, setCount] = useState(1);

  const incCount = () => setCount((c,) => c + 1);
  const decCount = () => setCount((c) => (c <= 0 ? 0 : c - 1));
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

      <div>
        <img src={product.image} className="card-image" alt={product.title} />
      </div>
      <InfoStyled>
        <div>
          <h5>{product.title}</h5>
        </div>
        <p className="font-bold">${product.price}</p>
      </InfoStyled>
      <ButtonDiv>
        <Button
          onClick={incCount}
          variant="outline-dark"
          style={{
            marginTop: 30,
          }}
        >
          +
        </Button>
        <p>{count}</p>
        <Button
          onClick={decCount}
          variant="outline-dark"
          style={{
            marginTop: 30,
          }}
        >
          -
        </Button>
      </ButtonDiv>

    </CartStyledDiv>
  );
};

export default CartsProduct;
