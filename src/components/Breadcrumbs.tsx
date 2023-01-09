import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../style.css';
import { IProducts } from '../types';

const BreadcrumbStyle = styled.div`
  display: flex;
`;

export const Breadcrumbs = (products: IProducts) => {
  return (
    <BreadcrumbStyle>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={'/'}>Store</Link>
        </Breadcrumb.Item>
        <BreadcrumbItem active>{products.products.category}</BreadcrumbItem>
        <BreadcrumbItem active>{products.products.brand}</BreadcrumbItem>
        <BreadcrumbItem active>{products.products.title}</BreadcrumbItem>
      </Breadcrumb>
    </BreadcrumbStyle>
  );
};

export default Breadcrumbs;
