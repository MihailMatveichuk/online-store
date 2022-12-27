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
  function changeOrdersPerPage(e: React.KeyboardEvent<HTMLInputElement>) {
    const target = e.key;
    if (target == '' || target == '0' || isNaN(+target)) {
      //setOrdersPerPage(() => changeOrdersPerPage);
      setOrdersPerPage(1);
    } else {
      setOrdersPerPage(+target);
      e.preventDefault();
    }
  }

  return (
    <div>
      <h3>Enter number of products per page in cart</h3>
      <input value={ordersPerPage} onKeyDown={changeOrdersPerPage} />
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
