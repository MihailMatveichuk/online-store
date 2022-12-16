import Product from './Product';

import { products } from '../data/products';
import { WrapperProducts } from '../style';

const Products = () => {
  return (
    <WrapperProducts>
      <div>
        Main
        <Product product={products[0]} />
        {/* <Product />
      <Product /> */}
      </div>
    </WrapperProducts>
  );
};

export default Products;
