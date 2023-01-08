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
`;
export function Purchase({ product, onAdd, onDelete }: IProductProps) {
  const [details] = useState(false);
  const btnClassName = details ? 'add-red' : 'add-white';
  const btnClasses = ['btn-class', btnClassName];
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '[]');

  const isItemInBasket: boolean = ordersStorage.some(
    (order: IPurchase) => order.id === product.id
  );

  function addingItem(prod: IPurchase) {
    isItemInBasket ? onDelete(prod) : onAdd(prod);
  }

  return (
    <div className="card">
      <Link to={'/modal/' + product.id}>
        <img
          src={product.images[0]}
          className="card-image"
          alt={product.title}
        />
      </Link>
      <p>{product.title}</p>
      <span
        style={{
          fontWeight: 'bold',
          color: 'rgb(129, 49, 49)',
        }}
      >
        {'Price: ' + product.price + '$'}
      </span>
      <span>
        <b>{'Rating: ' + product.rating}</b>
      </span>
      <ButtonContainer style={{ width: '50%' }}>
        <Link to={'/modal/' + product.id}>
          <Button className={btnClasses.join(' ')}>Product card</Button>
        </Link>
        <Button
          style={{ padding: '5px 15px 5px 15px' }}
          variant={isItemInBasket ? 'secondary' : 'primary'}
          onClick={() => addingItem(product)}
        >
          {' '}
          {isItemInBasket ? 'Delete' : 'Add'}
        </Button>
      </ButtonContainer>
    </div>
  );
}
