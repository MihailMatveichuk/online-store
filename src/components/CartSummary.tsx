import styled from 'styled-components';
import {IPurchase, ICartSummary} from '../types'
import OrderForm  from './OrderForm';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const SummaryStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  padding: 5em;
  background: bisque;
  color: black;
  border-radius: 8px;
  font-size: 20px;
  max-height: 500px;
`;
const BuyButtonStyled = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 1.2em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const InputStyled = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const DiscountValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CartSummary = ({orders}: ICartSummary) => {
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');
  const totalPrice:number = ordersStorage.reduce((sum:number,el:IPurchase) => sum +=el.price,0)
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  // const changeUnmountOnClose = (e: { target: { value: string; };}) => {
  //   let { value } = e.target;
  //   setUnmountOnClose(JSON.parse(value));
  // };
  
  return (
    <SummaryStyledDiv>

      <div>Products: {ordersStorage.length}</div>
      <div>Total: $ {totalPrice.toFixed(2)} </div>
      <DiscountValue>
        <InputStyled placeholder="Enter promo-code" />
        <Button 
        style={{
          width: "18em",
        }}color="secondary" onClick={toggle}>
          BUY NOW
        </Button>
        </DiscountValue>
        <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <OrderForm toggle={toggle}/>
          </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </SummaryStyledDiv>
  );
};

export default CartSummary;
