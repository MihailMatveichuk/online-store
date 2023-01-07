import styled from 'styled-components';
import { ICategoryProps } from '../types';

const StyledUlCategories = styled.ul`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const StyledLiCategory = styled.li`
  flex-direction: row;
  list-style-type: none;
  background-color: #f9f9f98d;
  padding: 5px 20px;
  border-radius: 17px;
  color: #230e70;
  margin-top: 5px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: bisque;
  }
  :active {
    background-color: darken(#f9f9f9, 5%);
  }
  .active {
    background-color: #282828;
    color: #fff;
  }
`;

const Categories = ({ onFilter }: ICategoryProps) => {
  const categories = [
    'all',
    'laptops',
    'smartphones',
    'fragrances',
    'groceries',
    'home-decoration',
    'womens-dresses',
    'mens-shirts',
    'skincare',
    'tops',
    // 'mens-shoes',
    // 'womens-shoes',
    // 'lighting',
    // 'automotive',
  ];

  return (
    <StyledUlCategories>
      {categories.map((categoryName, i) => (
        <StyledLiCategory
          onClick={() => {
            onFilter(categoryName);
          }}
          key={i}
        >
          {categoryName}
        </StyledLiCategory>
      ))}
    </StyledUlCategories>
  );
};

export default Categories;
