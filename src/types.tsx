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
    onDelete: (item: IPurchase) => void
  }
export interface IProductProps {
  product: IPurchase;
  onAdd: (item: IPurchase) => void | undefined;
  onDelete: (item: IPurchase) => void | undefined;
}
export interface IModalProps {
  products: IPurchase[]
  onAdd: (item: IPurchase) => void | undefined;
  onDelete: (item: IPurchase) => void | undefined;
}
export interface IOrdersProps {
  orders: IPurchase[];
}

export interface IBasketProps {
  orders: IPurchase[];
  onAdd: (item: IPurchase) => void | undefined;
  onDelete: (item: IPurchase) => void | undefined;
}
export interface ICartProps{
 product: IPurchase;
 onAdd: (item: IPurchase) => void | undefined;
 onDelete: (item: IPurchase) => void | undefined;
}
export interface ICategoryProps{
  onFilter: (category:string) => void;
}
