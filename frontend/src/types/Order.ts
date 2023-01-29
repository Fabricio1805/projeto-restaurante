export interface IOrder{
  _id: string;
  table: number;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }[];
}
