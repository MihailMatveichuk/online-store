import { ICartProps } from '../types';
import styled from 'styled-components';
import { IPurchase } from '../types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CartStyledDiv = styled.div`
  border: 2px solid bisque;
  border-radius: 7px;
  width: 700px;
  padding: 20px;
  display: flex;
`;

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
  margin-left: 20px;
  width: 80%;
`;

const CartsProduct = ({ onAdd, onDelete,  product, orders }: ICartProps) => {
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');
  const currProduct:IPurchase[] = ordersStorage.filter((el:IPurchase)=> el.id === product.id)
  const countOfProduct:number = currProduct.length;

  return (
    <CartStyledDiv>

        <Link to={'/modal/' + product.id} >
          <div>
            <img src={product.images[0]} className="card-image" alt={product.title} />
          </div>
        </Link>
        <InfoStyled>
            <h5
              className='font-bold' >
                {product.title}
            </h5>
            <span><b>Category: </b>{product.category.toUpperCase()}</span>
            <span><b>Count: </b>{product.rating}</span>
            <span><b>Rating: </b>{product.stock}</span>
            <p><b>Price: </b>{product.price}$</p>
        </InfoStyled>
        <ButtonDiv>
          <Button
            onClick = {() => countOfProduct < product.stock ? onAdd(product) : null}
            variant="outline-dark"
            style={{
              marginTop: 30,
            }}
          >
            +
          </Button>
          <p>{countOfProduct}</p>
          <Button
            onClick={() => onDelete(product)}
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
