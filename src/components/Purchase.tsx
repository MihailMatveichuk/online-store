import React, {useState} from 'react';
import '../style.css';
import {Clicker} from '../Clicker'
interface IProductProps {
    product: IPurchase;
}

export interface IPurchase{
  id: number,
  title: string, 
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
      rate: number,
      count: number
  }
}

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

