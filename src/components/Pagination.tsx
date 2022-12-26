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
  function changeOrdersPerPage(event: React.EventHandler) {
    const target = event.target as HTMLInputElement;
    if (target.value == '' || target.value == '0') {
      setOrdersPerPage(() => changeOrdersPerPage);
    } else {
      setOrdersPerPage(+target.value);
      event.preventDefault();
    }
  }

  return (
    <div>
      <h3>Enter products per page in cart</h3>
      <input value={ordersPerPage} onChange={changeOrdersPerPage} />
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
