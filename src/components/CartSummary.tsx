import styled from 'styled-components';
import { IPurchase, IOnToggle, ISaleObject } from '../types';
import OrderForm from './OrderForm';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useEffect, useState } from 'react';
import '../style.css';

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

const PromoItems = styled.p`
  color: rgb(129, 49, 49);
  opacity: 0.6;
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
  margin-bottom: 10px;
  padding: ${(props) => props.size};
`;

const DiscountValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const saleItems: ISaleObject = {
  epm: {
    value: 'EPAM Systems',
  },
  rs: {
    value: 'Rolling Scopes School',
  },
};
const promoArray: (string | ISaleObject)[] = [];

const CartSummary = ({ prop, openOrderForm }: IOnToggle) => {
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');
  const totalPrice: number = ordersStorage.reduce(
    (sum: number, el: IPurchase) => (sum += el.price),
    0
  );
  const [price, setPrice] = useState(totalPrice);
  const [newPrice, setNewPrice] = useState<number>(totalPrice);
  const [inputValue, setInputValue] = useState('');
  const [modal, setModal] = useState(prop);
  const [saleValue, setSaleValue] = useState<ISaleObject | string>('');
  const [unmountOnClose] = useState(false);

  useEffect(() => {
    const keys = Object.keys(saleItems);
    if (keys.includes(inputValue)) {
      const objectValue = saleItems[inputValue as keyof typeof saleItems].value;
      if (!promoArray.includes(`${objectValue} - 10%`)) {
        promoArray.push(`${objectValue} - 10%`);
        setNewPrice((newPrice / 100) * 90);
        setSaleValue(`${promoArray}`);
      }
    } else {
      setPrice(totalPrice);
      setSaleValue(`${promoArray}`);
    }
  }, [inputValue]);

  const toggle = () => {
    openOrderForm(false);
    setModal(!modal);
  };

  return (
    <SummaryStyledDiv>
      <div>Products: {ordersStorage.length}</div>
      {saleValue ? (
        <div className="crossValue">Total: $ {price.toFixed(2)} </div>
      ) : (
        <div>Total: $ {price.toFixed(2)} </div>
      )}
      {saleValue ? <div>Total with promo: $ {newPrice.toFixed(2)} </div> : ''}
      <DiscountValue>
        <InputStyled
          placeholder="Enter promo-code"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />
        <>{saleValue ? <>{saleValue}</> : ''}</>
        <PromoItems>Promo for test: `RS`, `EPM`</PromoItems>
        <Button
          style={{
            width: '18em',
          }}
          color="secondary"
          onClick={toggle}
        >
          BUY NOW
        </Button>
      </DiscountValue>
      <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <OrderForm toggle={toggle} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </SummaryStyledDiv>
  );
};

export default CartSummary;
