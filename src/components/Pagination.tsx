import styled from 'styled-components';
import { IPaginationProps } from '../types';

const Pagination = ({
  paginate,
  ordersPerPage,
  setOrdersPerPage,
  uniqePurchases,
}: IPaginationProps) => {
  const numOfPages: number[] = [];

  const ordersCount = Math.ceil(uniqePurchases.length / ordersPerPage);
  for (let i = 1; i <= ordersCount; i++) {
    numOfPages.push(i);
  }

  const EnterNumber = styled.h3`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  `;
  const NumberInput = styled.input`
    width: 100px;
  `;
  function changeOrdersPerPage(e: React.KeyboardEvent<HTMLInputElement>) {
    const target = e.key;
    if (target == '' || target == '0' || isNaN(+target)) {
      setOrdersPerPage(1);
    } else {
      setOrdersPerPage(+target);
      e.preventDefault();
    }
  }

  return (
    <div>
      <EnterNumber>
        Enter number of products per page in cart
        <NumberInput value={ordersPerPage} onKeyDown={changeOrdersPerPage} />
      </EnterNumber>

      <ul className="pagination">
        {numOfPages.map((num) => (
          <li className="page-item" key={num} onClick={() => paginate(num)}>
            <a href="#" className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
