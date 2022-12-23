import { ICartProps } from '../types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

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
  border: 2px solid black;
  border-radius: 7px;
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;
const CartsProduct = ({ product }: ICartProps) => {
  return (
    <CartStyledDiv>
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
          variant="outline-dark"
          style={{
            marginTop: 30,
          }}
        >
          +
        </Button>
        <p>{product.id}</p>
        <Button
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
