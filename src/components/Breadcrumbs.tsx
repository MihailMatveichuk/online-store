import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../style.css';

const BreadcrumbStyle = styled.div`
  display: flex;
`;

export const Breadcrumbs = () => {
  return (
    <BreadcrumbStyle>
      <Breadcrumb>
        <BreadcrumbItem active></BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={'/'}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active></BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem active>Basket</BreadcrumbItem>
      </Breadcrumb>
    </BreadcrumbStyle>
  );
};

export default Breadcrumbs;
