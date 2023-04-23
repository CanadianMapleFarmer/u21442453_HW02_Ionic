import { iRestaurant } from './irestaurant';

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
}
