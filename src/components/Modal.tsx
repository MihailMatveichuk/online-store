import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IModalProps, IPurchase } from '../types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PurchaseContainer = styled.div`
  width: 50%;
  display: flex;
  column-gap: 10%;
  margin-top: 50px;
`;
const ImageValue = styled.div`
  display: flex;
  flex-direction: column;
`;
const Rating = styled.div`
  font-weight: 300;
  font-size: 20px;
  color: rgba(189, 192, 200, 0.962);
`;

const Count = styled.div`
  font-weight: 300;
  font-size: 20px;
  color: black;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Category = styled.h3`
  color: rgb(129, 49, 49);
`;
const Price = styled.p`
  font-size: 36px;
  color: rgb(129, 49, 49);
`;
const Description = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;
const DescriptionTitle = styled.p`
  font-size: 24px;
`;

const DescriptionContent = styled.p`
  font-size: 20px;
  color: rgb(129, 49, 49);
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Modal = ({ products, onAdd, onDelete, orders, openOrderForm }: IModalProps) => {

  const params = useParams().title;
  const [detailedProduct, setdetailedProduct] = useState(products);



  function openOrder(prod: IPurchase, item: boolean){
      if(isItemInBasket) openOrderForm(item);
      else {
        onAdd(prod)
        openOrderForm(item);
      }
    }


  useEffect(() => {
    let newProducts = [...products].filter((el) => +el.id == +params!);
    setdetailedProduct(newProducts)
  }, [products]);

  const id: number = +params!;

  let isItemInBasket = orders.some((order) => order.id === products[id - 1].id);

  function addingItem(prod: IPurchase) {
    isItemInBasket ? onDelete(prod) : onAdd(prod);
  }

  return (
    <PurchaseContainer>
      <ImageValue>
        <Link to={'/modal/' + detailedProduct[0]?.id}>
          <img
            style={{
              width: '300px',
            }}
            src={detailedProduct[0]?.image}
            alt="Product"
          />
        </Link>
        <ButtonDiv>
          <Button
            variant={isItemInBasket ? 'secondary' : 'primary'}
            style={{
              marginTop: 30,
            }}
            onClick={() => addingItem(detailedProduct[0])}
          >
            {isItemInBasket ? 'Delete from basket' : 'Add to Basket'}
          </Button>
          <Link to={'/basket'}
          style={{
            display: 'flex',
            justifyContent:"space-between"
          }}>
            <Button
              variant="primary"
              style={{
                marginTop: 30,
              }}
              onClick={()=> openOrder(products[id - 1], true)}>
              Buy rapidly
            </Button>
            <Button
              variant="primary"
              style={{
                marginTop: 30,
              }}
            >
              Move to Basket
            </Button>
          </Link>
        </ButtonDiv>
      </ImageValue>
      <MainColumn>
        <Category>Category: {detailedProduct[0]?.category.toUpperCase()}</Category>
        <h2>{detailedProduct[0]?.title}</h2>
        <Rating>Rating: {detailedProduct[0]?.rating.rate}</Rating>
        <Count>Count: {detailedProduct[0]?.rating.count}</Count>
        <Price>Price: {detailedProduct[0]?.price + ' $'}</Price>
        <Description>
          <DescriptionTitle>Description:</DescriptionTitle>
          <DescriptionContent>
            {detailedProduct[0]?.description}
          </DescriptionContent>
        </Description>
      </MainColumn>
    </PurchaseContainer>
  );
};
export default Modal;
