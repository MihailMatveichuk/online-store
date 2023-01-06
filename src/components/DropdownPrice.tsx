import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { ISortProductsPrice } from '../types';

const DropdownSortPrice = ({
  onSortUp,
  onSortDown,
  onFilter,
  filtered,
}: ISortProductsPrice) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="white">
        <b>Sort by Price</b>
      </DropdownToggle>
      <DropdownMenu white>
        <DropdownItem header>
          <b>Sort by:</b>
        </DropdownItem>
        <DropdownItem onClick={() => onFilter('all')}>Popularity:</DropdownItem>
        <DropdownItem onClick={() => onSortUp(filtered)}>
          Ascending price
        </DropdownItem>
        <DropdownItem onClick={() => onSortDown(filtered)}>
          Descending price
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default DropdownSortPrice;
