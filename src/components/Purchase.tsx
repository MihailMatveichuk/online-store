import {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {IProductProps} from '../types'
import '../style.css';



export function Purchase({ product }: IProductProps){

    const [details, setDetails] = useState(false)
    const btnClassName = details ? "add-yellow": "add-blue"
    const btnClasses = ["btn-class", btnClassName]
    return (
        <div
        className="card"
        >   
        <Link to={'/modal/' + product.id} >
            <img src={product.image}  className='card-image'  alt={product.title}/>
        </Link>
            <p>{product.title}</p>
            <span className="font-bold">{product.price + " $"}</span>
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

