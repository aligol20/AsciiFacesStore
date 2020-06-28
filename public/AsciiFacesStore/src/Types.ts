/**
 * For making the code more cleaner I used the following.
 */

export interface listItem {
  title: string;
  data: {id: string; size: number; price: number}[][];
}
export enum sortTypes {
  id = 'id',
  price = 'price',
  size = 'size',
}
