import styled from 'styled-components';
import { IPurchase, IOnToggle } from '../types'
import OrderForm  from './OrderForm';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useState } from 'react';

const SummaryStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: bisque;
  color: black;
  border-radius: 8px;
  font-size: 20px;
  max-height: 300px;
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

const CartSummary = ({prop, openOrderForm}: IOnToggle ) => {
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');
  const totalPrice:number = ordersStorage.reduce((sum:number,el:IPurchase) => sum +=el.price,0)
  const [modal, setModal] = useState(prop);
  const [unmountOnClose, setUnmountOnClose] = useState(false);
  const toggle = () => {
    openOrderForm(false);
    setModal(!modal);
  }
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
      <Modal isOpen={(modal)} toggle={toggle} unmountOnClose={unmountOnClose} >
          <ModalHeader toggle={toggle}>
          </ModalHeader>
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
