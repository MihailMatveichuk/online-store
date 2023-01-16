import { Link } from 'react-router-dom';
import '../style.css';
import { IOrdersProps, IPurchase } from '../types';
import BasketImagePath from './icon_path/Basket';

const Header = ({ orders }: IOrdersProps) => {
  const ordersStorage = JSON.parse(localStorage.getItem('orders') || '[]');
  let totalPrice: number;
  if (ordersStorage) {
    totalPrice = ordersStorage.reduce(
      (sum: number, el: IPurchase) => (sum += el.price),
      0
    );
  } else {
    totalPrice = totalPrice = orders.reduce(
      (sum: number, el: IPurchase) => (sum += el.price),
      0
    );
  }
  return (
    <div className="header-container">
      <div className="header-h1">
        <Link to="/" title="Logo">
          <h1>Online store</h1>
        </Link>
      </div>
      <div
        style={{
          color: 'rgb(129, 49, 49)',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        {'Total price: $' + totalPrice.toFixed(2)}
      </div>

      <div className="right-part-header">
        <div className="button-basket">
          <Link to="/basket">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="30"
              fill="currentColor"
              className="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <BasketImagePath />
            </svg>
            <span
              style={{
                color: 'rgb(129, 49, 49)',
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              {' '}
              {ordersStorage.length}{' '}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
