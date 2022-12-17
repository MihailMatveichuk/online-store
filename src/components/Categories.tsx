import styled from 'styled-components';

const StyledUlCategories = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
const StyledLiCategory = styled.li`
  flex-direction: row;
  list-style-type: none;
  background-color: #f9f9f98d;
  padding: 13px 30px;
  border-radius: 30px;
  color: #230e70;
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

const Categories= () => {
  const categories = [
    'all',
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
  ];


  // const [filtered, setFiltered] = useState(product.cagegory);

  // function filterCategory(category) {

  // }

  return (
    <StyledUlCategories>
      {/* {categories.map((categoryName, i) => (
        <StyledLiCategory onClick={() => filterCategory(categoryName)} key={i}>
          {categoryName}
        </StyledLiCategory>
      ))} */}
    </StyledUlCategories>
  );
};

export default Categories;
