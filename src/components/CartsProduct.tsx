import { ICartProps } from '../types';
import styled from 'styled-components';
import { IPurchase } from '../types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import { useState } from 'react';
import Pagination from './Pagination';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

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
  align-items: flax-start;
  margin-left: 20px;
`;

const CartStyledDiv = styled.div`
  border: 2px solid bisque;
  border-radius: 7px;
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const CartsProduct = ({ onAdd, onDelete,  product, orders }: ICartProps) => {
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');
  const currProduct:IPurchase[] = ordersStorage.filter((el:IPurchase)=> el.id === product.id)
  const countOfProduct:number = currProduct.length;

  return (
    <CartStyledDiv>
      
        <Link to={'/modal/' + product.title} >
          <div>
            <img src={product.image} className="card-image" alt={product.title} />
          </div>
        </Link>
        <InfoStyled>
          <div>
            <h5 
            className='font-bold' >{
            product.title}</h5>
            <span><b>Category: </b>{product.category.toUpperCase()}</span><br/>
            <span><b>Count: </b>{product.rating.count}</span><br/>
            <span><b>Rating: </b>{product.rating.rate}</span>
          </div>
          <p><b>Price: </b>{product.price}$</p>
        </InfoStyled>
        <ButtonDiv>
          <Button
            onClick = {() => countOfProduct < product.rating.count? onAdd(product): null}
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
