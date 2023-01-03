export interface IPurchase {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ISortProductsPrice{
  filtered: IPurchase[];
  onSortUp: (item: IPurchase[]) => void;
  onSortDown: (item: IPurchase[]) => void;
  onFilter: (category: string) => void;
}

export interface ISortProductsRating{
  filtered: IPurchase[];
  onSortUp: (item: IPurchase[]) => void;
  onSortDown: (item: IPurchase[]) => void;
}

export interface ISort{
  filtered: IPurchase;
}

export interface IAppProps {
  products: IPurchase[];
  error: string;
  loading: boolean;
  orders: IPurchase[];
  onAdd: (item: IPurchase) => void;
  onDelete: (item: IPurchase) => void;
  
}

export interface IProductProps {
  orders: IPurchase[];
  product: IPurchase;
  onAdd: (item: IPurchase) => void | undefined;
  onDelete: (item: IPurchase) => void | undefined;
}
export interface IModalProps {
  products: IPurchase[];
  orders: IPurchase[];
  onAdd: (item: IPurchase) => void | undefined;
  onDelete: (item: IPurchase) => void | undefined;
  openOrderForm:(item: boolean) => void 
}
export interface IOrdersProps {
  orders: IPurchase[];
}

export interface INumberCard {
  filtered: IPurchase[];
  value: IPurchase[];
}

export interface openOrderForm {
  openOrderForm:(item: boolean) => boolean 
}

export interface IBasketProps {
  orders: IPurchase[];
  onAdd: (item: IPurchase) => void | undefined;
  onDelete: (item: IPurchase) => void | undefined;
  prop: boolean;
  openOrderForm: (item: boolean) => void;
}
export interface ICartProps {
  product: IPurchase;
  orders: IPurchase[];
  onAdd: (item: IPurchase) => void | undefined;
  onDelete: (item: IPurchase) => void | undefined;
}
export interface ICategoryProps {
  onFilter: (category: string) => boolean;
}

export interface IPaginationProps {
  ordersPerPage: number;
  setOrdersPerPage: React.Dispatch<React.SetStateAction<number>>
  uniqePurchases: IPurchase[];
  paginate: (num: number) => void;
}

export interface ICartSummary{
  orders: IPurchase[];
}

export interface ErrorForm{
  name: string;
  email: string;
  phone: string;
}

export interface IOnToggle{
 prop: boolean;
 openOrderForm: (item: boolean) => void;
}
