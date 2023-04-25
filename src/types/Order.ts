import { Product } from './Product';

export interface Order {
  table: string;
  products: Product[];
}
