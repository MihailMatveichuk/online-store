import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { ISortProducts } from '../types';


const DropdownSort = ({onSortUp, onSortDown, onFilter, filtered}:ISortProducts) => {
    return (
        <UncontrolledDropdown>
        <DropdownToggle
          caret
          color="white"
        >
           <b>Sort by:</b>
        </DropdownToggle>
        <DropdownMenu white>
          <DropdownItem header>
            <b>Sort by:</b>
          </DropdownItem>
          <DropdownItem onClick={() => onFilter('all')}>
            Popularity:
          </DropdownItem>
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

export default DropdownSort;