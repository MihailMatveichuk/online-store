import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import {ButtonDiv} from './Modal'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../style.css';
import { IProductProps, IPurchase } from '../types';

const AddButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  color: palevioletred;
  font-size: 1em;
  margin: 0.75em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export function Purchase({ product, onAdd, onDelete }: IProductProps) {
  const [details, setDetails] = useState(false);
  const [item, setItem] = useState(true);
  const btnClassName = details ? 'add-red' : 'add-white';
  const btnClasses = ['btn-class', btnClassName];

  function addingItem(prod: IPurchase){
    item ? onAdd(prod): onDelete(prod);
    return setItem((prev) => !prev)
  }


  return (
    <div className="card">
      <Link to={'/modal/' + product.title} >
            <img src={product.image}  className='card-image'  alt={product.title}/>
      </Link>
      <p>{product.title}</p>
      <span style={{
        fontWeight: "bold",
        color: "rgb(129, 49, 49)"
      }}>{"Price: " + product.price + "$"}</span>
      <ButtonDiv style={{width: "50%"}}>
        <button
          className={btnClasses.join(' ')}
          onClick={() => setDetails((prev) => !prev)}
        >
          {details ? 'Hide details' : 'Show details'}
        </button >
        <Button 
        style={{padding: "5px 15px 5px 15px"}}
          variant = {item ? "primary": "secondary"} 
          onClick={() => addingItem(product)}
              > {item ? 'add' : 'delete'}
        </Button>
      </ButtonDiv>
      
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

