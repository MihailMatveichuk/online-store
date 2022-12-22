import  { Button } from 'react-bootstrap'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IModal } from '../types';

const PurchaseContainer = styled.div`
  width: 50%;
  display: flex;
  column-gap: 10%;
  margin-top: 50px;
`

const ImageValue = styled.div`
  display: flex;
  flex-direction: column;
`

const Rating = styled.div`
  font-weight: 300;
  font-size: 20px;
  color: rgba(189, 192, 200, 0.962);
`
const MainColumn = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`
const Category = styled.h3`
  color: rgb(129, 49, 49);
`

const Price = styled.p`
  font-size: 36px;
  color: rgb(129, 49, 49);
`

const Description = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
`
const DescriptionTitle = styled.p`
  font-size: 24px;
`
const DescriptionContent = styled.p`
  font-size: 20px;
  color: rgb(129, 49, 49);
`

const Modal = ({products}: IModal ) => {
const params = useParams();
const id: string= params.id!;
  return (
    <PurchaseContainer>
      <ImageValue >
        <img style={{
           width: "300px",
          }}src={products[+id - 1].image} alt="Product" />
        <Button variant='outline-dark'
          style={{
            marginTop: 30,
            }}>Move to Basket
        </Button>
      </ImageValue>
     
      <MainColumn>
            <Category>
                Category: {products[+id - 1].category.toUpperCase()}
            </Category>

            <h2>
                {products[+id - 1].title} 
            </h2>

            <Rating>
                Rating: {products[+id - 1].rating.rate}
            </Rating>

            <Price>
            Price: {products[+id - 1].price + ' $'}
            </Price>

            <Description>
              <DescriptionTitle>
                Description:   
              </DescriptionTitle>  
              <DescriptionContent>
                {products[+id - 1].description}
              </DescriptionContent>
            </Description>
      </MainColumn> 
      </PurchaseContainer>
  );
};

export default Modal;
