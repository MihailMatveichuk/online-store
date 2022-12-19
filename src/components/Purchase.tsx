
import { useState } from 'react';
import styled from 'styled-components';
import '../style.css';
interface IProductProps {
  product: IPurchase;

}

export interface IPurchase {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

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



export function Purchase({ product }: IProductProps){
    const [details, setDetails] = useState(false)

    const btnClassName = details ? "add-yellow": "add-blue"
    const btnClasses = ["btn-class", btnClassName]
    return (
        <div
        className="card"
        >
            <img src={product.image} className='card-image' alt={product.title}/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button
            className= {btnClasses.join(' ')}
            onClick = {() => setDetails(prev => !prev)}
            >
                {details ? 'Hide details': "Show details"}
            </button>
            { details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: "bold"}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}


