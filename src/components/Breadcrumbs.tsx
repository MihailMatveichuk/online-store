import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../style.css';
import { IProducts } from '../types';

const BreadcrumbStyle = styled.div`
  display: flex;
`;

export const Breadcrumbs = ({ products }: IProducts) => {
  return (
    <BreadcrumbStyle>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={'/'}>STORE</Link>
        </Breadcrumb.Item>
        <BreadcrumbItem active>
          {products?.category.toUpperCase()}
        </BreadcrumbItem>
        <BreadcrumbItem active>{products?.brand.toUpperCase()}</BreadcrumbItem>
        <BreadcrumbItem active>{products?.title.toUpperCase()}</BreadcrumbItem>
      </Breadcrumb>
    </BreadcrumbStyle>
  );
};

export default Breadcrumbs;
