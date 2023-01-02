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
  align-items: flex-start;
  justify-content: space-between;
`;

const Modal = ({ products, onAdd, onDelete, orders }: IModalProps) => {
  const params = useParams().title;
  const [detailedProduct, setdetailedProduct] = useState();
  // const categoryQuery = params.get('category') || '';
  console.log('params: ', params);

  // useEffect(() => {
  //   let newProducts = [...products].filter((el) => +el.id == +params);
  //   console.log('newProducts:!!!!!!!!!!!!!!! ', newProducts);
  //   setdetailedProduct(newProducts)
  // }, [products]);

  console.log('detailedProduct: ', detailedProduct);
  // useEffect(() => {
  //   if (categoryQuery.length > 2 ) {
  //     let newProducts = [...products].filter((el) => el.category === categoryQuery);
  //     setFiltered(newProducts);
  //   }else {
  //     setFiltered(products)
  //   }
  // }, [products]);

  // const id: number = products?.find(
  //   (param) => param.title.trim() == params?.trim()
  // )?.id!;
  const id: number = params;
  console.log('id: ', id);

  let isItemInBasket = orders.some((order) => order.id === products[id - 1].id);
  console.log('isItemInBasket: ', isItemInBasket);

  console.log('products[id - 1]', products[id - 1]);

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
