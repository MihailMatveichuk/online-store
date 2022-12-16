import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

function Product(props: ProductProps) {
  return (
    <div>
      {props.product.title}
      {props.product.images[0]}
    </div>
  );
}

export default Product;
