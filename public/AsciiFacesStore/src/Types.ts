export interface listItem {
  title: string;
  data: {id: string; size: number; price: number}[][];
}
export enum sortTypes {
  id = 'id',
  price = 'price',
  size = 'size',
}
