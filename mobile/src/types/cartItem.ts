import { IProduct } from './product';

export interface CartItem {
  product: IProduct;
  quantity: number;
}
