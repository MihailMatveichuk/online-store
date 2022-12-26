import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import styled from 'styled-components';
import '../style.css'

const BreadcrumbStyle = styled.div`
  display: flex;
`

export const Breadcrumbs = () => {

    return (
        <BreadcrumbStyle>
        <Breadcrumb>
          <BreadcrumbItem active>
          </BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
          <a href="/" title="Logo">
                Home
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
          </BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">
              Home
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
              Basket
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbStyle>
    );
};

export default Breadcrumbs;