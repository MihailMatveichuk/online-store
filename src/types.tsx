export interface IPurchase{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
      rate: number,
      count: number
  }
}
export interface IAppProps {
    products: IPurchase[],
    error: string,
    loading: boolean,
    onAdd: (item: IPurchase) => void;
  }
export interface IProductProps {
    product: IPurchase;
}
export interface IModal {
  products: IPurchase[]
}
