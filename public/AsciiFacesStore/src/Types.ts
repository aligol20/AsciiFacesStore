/**
 * For making the code more cleaner I used the following.
 */

// every section that contains 20 products, has this type
export interface listItem {
  title: string;
  data: item[][];
}
// every product has this type
export interface item {
  id: string;
  size: number;
  price: number;
}
// available items for sorting the products

export enum sortTypes {
  id = 'id',
  price = 'price',
  size = 'size',
}
