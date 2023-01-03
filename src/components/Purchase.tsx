import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../style.css';
import { IProductProps, IPurchase } from '../types';

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
`

export function Purchase({ product, onAdd, onDelete, orders }: IProductProps) {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? 'add-red' : 'add-white';
  const btnClasses = ['btn-class', btnClassName];
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '[]');

  let isItemInBasket:boolean = ordersStorage.some((order:IPurchase) => order.id === product.id);

  function addingItem(prod: IPurchase){
    isItemInBasket ? onDelete(prod): onAdd(prod)
  }

  return (
    <div className="card">
      <Link to={'/modal/' + product.id} >
            <img src={product.image}  className='card-image'  alt={product.title}/>
      </Link>
      <p>{product.title}</p>
      <span style={{
        fontWeight: "bold",
        color: "rgb(129, 49, 49)"
      }}>{"Price: " + product.price + "$"}</span>
      <span ><b>{"Rating: " + product.rating.rate}</b></span>
      <ButtonContainer style={{width: "50%"}}>
        <button
          className={btnClasses.join(' ')}
          onClick={() => setDetails((prev) => !prev)}
        >
          {details ? 'Hide details' : 'Show details'}
        </button >
        <Button
        style={{padding: "5px 15px 5px 15px"}}
          variant = {isItemInBasket ? "secondary": "primary"}
          onClick={() => addingItem(product)}
              > {isItemInBasket ? 'Delete' : 'Add'}
        </Button>
      </ButtonContainer>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}

