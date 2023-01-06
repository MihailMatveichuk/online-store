import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { ISortProductsRating } from '../types';

const DropdownSortRating = ({
  onSortUp,
  onSortDown,
  filtered,
}: ISortProductsRating) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="white">
        <b>Sort by Rating</b>
      </DropdownToggle>
      <DropdownMenu white>
        <DropdownItem header>
          <b>Sort by:</b>
        </DropdownItem>
        <DropdownItem onClick={() => onSortUp(filtered)}>
          To high level rating
        </DropdownItem>
        <DropdownItem onClick={() => onSortDown(filtered)}>
          To low level rating
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default DropdownSortRating;
