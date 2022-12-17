import styled from 'styled-components';

const StyledUlCategories = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
const StyledLiCategory = styled.li`
  flex-direction: row;

  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  color: #230e70;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: darken(#f9f9f9, 2%);
  }

  &:active {
    background-color: darken(#f9f9f9, 5%);
  }

  &.active {
    background-color: #282828;
    color: #fff;
  }
`;

const Categories = () => {
  const categories = ['mens', 'electronics', 'womens'];

  return (
    <StyledUlCategories>
      {categories.map((categoryName, i) => (
        <StyledLiCategory key={i}>{categoryName}</StyledLiCategory>
      ))}
    </StyledUlCategories>
  );
};

export default Categories;
