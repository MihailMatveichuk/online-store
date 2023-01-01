import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IModalProps, IPurchase } from '../types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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
  align-items: flex-start;
  justify-content: space-between;
`;

const Modal = ({
  products,
  onAdd,
  onDelete,
  orders,
  setProducts,
}: IModalProps) => {
  console.log('products: ', products);
  const params = useParams().title;
  if (products.length === 0) {
    useEffect(() => {
      setProducts();
    }, [products]);
  }
  setProducts(products);
  console.log('params: ', params);
  const id: number = products?.find(
    (param) => param.title.trim() == params?.trim()
  )?.id!;
  console.log('id: ', id);

  let isItemInBasket = orders.some((order) => order.id === products[id - 1].id);

  function addingItem(prod: IPurchase) {
    isItemInBasket ? onDelete(prod) : onAdd(prod);
  }

  return (
    <PurchaseContainer>
      <ImageValue>
        <Link to={'/modal/' + products[id - 1].title}>
          <img
            style={{
              width: '300px',
            }}
            src={products[id - 1].image}
            alt="Product"
          />
        </Link>
        <ButtonDiv>
          <Button
            variant={isItemInBasket ? 'secondary' : 'primary'}
            style={{
              marginTop: 30,
            }}
            onClick={() => addingItem(products[id - 1])}
          >
            {isItemInBasket ? 'Delete from basket' : 'Add to Basket'}
          </Button>
          <Link to={'/basket'}>
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
        <Category>Category: {products[id - 1].category.toUpperCase()}</Category>
        <h2>{products[id - 1].title}</h2>
        <Rating>Rating: {products[id - 1].rating.rate}</Rating>
        <Count>Count: {products[id - 1].rating.count}</Count>
        <Price>Price: {products[id - 1].price + ' $'}</Price>
        <Description>
          <DescriptionTitle>Description:</DescriptionTitle>
          <DescriptionContent>
            {products[id - 1].description}
          </DescriptionContent>
        </Description>
      </MainColumn>
    </PurchaseContainer>
  );
};

export default Modal;
function onDelete(prod: IPurchase) {
  throw new Error('Function not implemented.');
}
