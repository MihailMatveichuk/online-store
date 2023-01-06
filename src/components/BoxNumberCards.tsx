import styled from 'styled-components';
import { INumberCard } from '../types';

const CardBox = styled.div`
  padding: 2px 5px;
  border: 0.5px solid rgba(170, 154, 154, 0.264);
  border-radius: 15px;
  text-align: center;
`;

const BoxNumberCards = ({ filtered }: INumberCard) => {
  return (
    <CardBox>
      Purchase: <b>{filtered.length}</b>
    </CardBox>
  );
};

export default BoxNumberCards;
