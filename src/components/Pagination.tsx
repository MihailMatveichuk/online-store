import { IPaginationProps } from '../types';

const Pagination = ({
  paginate,
  ordersPerPage,
  uniqePurchases,
}: IPaginationProps) => {
  const numOfPages: number[] = [];
  console.log('uniqePurchases: ', uniqePurchases);
  const ordersCount = Math.ceil(uniqePurchases.length / ordersPerPage);
  for (let i = 1; i <= ordersCount; i++) {
    numOfPages.push(i);
  }

  return (
    <div>
      <h3>Products In Cart</h3>
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
