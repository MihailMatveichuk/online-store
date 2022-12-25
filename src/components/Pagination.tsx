import { useState } from 'react';
import { IPaginationProps, IPurchase } from '../types';

const Pagination = ({paginate, ordersPerPage}:IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '{}');

  const uniqePurchases = ordersStorage.filter(
    (el: IPurchase, ind: number) => ind === ordersStorage.indexOf(el)
  );

  const currentOrder = ordersStorage.slice(firstOrderIndex, lastOrderIndex);
  const numOfPages: number[] = [];
  const ordersCount = Math.ceil(ordersStorage.length / ordersPerPage);
  for (let i = 1; i <= ordersCount; i++) {
    numOfPages.push(i);
  }

  // const paginate = (pageNum: number) => setCurrentPage(pageNum);

  return (
    <div>
      <h3>Products In Cart</h3>
      <ul className="pagination">
        {numOfPages.map((num) => (
          <li className="page-item" key={num}  onClick={() => paginate(num)}>
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
