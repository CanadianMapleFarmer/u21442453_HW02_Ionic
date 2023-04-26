import { iRestaurant } from './irestaurant';

type allowNull = number | null | any;
export class Restaurant implements iRestaurant {
  id!: number;
  name!: string;
  type!: string;
  rating!: number;
  distance!: number;
  price!: number;
  image!: string;
  dish!: string;
  dishImage!: string;
  quantity!: allowNull;
  totalHistory!: allowNull;
  dateTimeHistory!: allowNull;
}
