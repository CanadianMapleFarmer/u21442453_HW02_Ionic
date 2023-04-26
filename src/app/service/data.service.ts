import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../shared/restaurant';
import { user } from '../shared/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    if (!localStorage.getItem('restaurants')) {
      let restaurants = [
        {
          id: 1,
          name: 'Kung Fu Kitchen',
          type: 'Asian',
          rating: 4.6,
          distance: 0.9,
          price: 77.2,
          image:
            'https://d1ralsognjng37.cloudfront.net/ef1c7d23-4f16-468b-b06a-5d33f01ca8f0.jpeg',
          dish: 'Chicken Chow Faan',
          dishImage:
            'https://d1ralsognjng37.cloudfront.net/a5252895-b4e8-4c88-9da5-f78a70885cb5.jpeg',
        },
        {
          id: 2,
          name: 'Burger King®',
          type: 'American',
          rating: 4.3,
          distance: 1.5,
          price: 162.9,
          image:
            'https://cdn.sanity.io/images/czqk28jt/staging_bk_za/5250105499b6d4bdc57944304135c268c30736db-1920x1086.jpg',
          dish: 'Texas BBQ Bacon King',
          dishImage:
            'https://tb-static.uber.com/prod/image-proc/processed_images/72d9f29d1bded9e75d324e57017ba035/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        },
        {
          id: 3,
          name: `Roman's Pizza`,
          type: 'Pizza',
          rating: 4.5,
          distance: 2.2,
          price: 143.9,
          image:
            'https://media-cdn.tripadvisor.com/media/photo-p/27/37/26/5c/3.jpg',
          dish: 'Large Bacon Avo Feta Pizza',
          dishImage:
            'https://images.bolt.eu/store/2023/2023-04-19/bcd6aacf-1d95-4290-a63f-f53d4689b346.png',
        },
        {
          id: 4,
          name: 'Steers',
          type: 'Burgers',
          rating: 4.6,
          distance: 3.6,
          price: 129.9,
          image:
            'https://a.mktgcdn.com/p/QUJwRNC2gx2s_iaYnSPMbarK8SOGLxXmZS5NHpsv2bE/600x360.jpg',
          dish: 'Original King Steer Burger',
          dishImage:
            'https://steers.co.za/images/menu/2021/burgers/kingsteer---king-steer-burger.png',
        },
      ];
      localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }

    if (!localStorage.getItem('user')) {
      let user = {
        id: 1,
        full_name: 'Rowdy Peterson',
        cellNum: '075 145 8569',
        email: 'rowdypeterson@mail.com',
      };
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  getUser(): Observable<any> {
    let user: any;
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user')!);
    }
    return of(user);
  }

  getRestaurants(): Observable<any[]> {
    let restaurants: any[] = [];
    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }
    return of(restaurants);
  }

  getRestaurant(id: number): Observable<any> {
    let restaurants: Restaurant[] = [];

    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }

    let restaurant: any = restaurants.find(
      (restaurants) => restaurants.id === id
    );

    return of(restaurant);
  }

  addToCart(res: any): Observable<any> {
    if (res.quantity !== undefined || null) {
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(res));
    }
    if (!localStorage.getItem('cart')) {
      res['quantity'] = 1;
      localStorage.setItem('cart', JSON.stringify(res));
    } else if (JSON.stringify(res) === localStorage.getItem('cart')) {
      res.quantity = res.quantity + 1;
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(res));
    } else if (JSON.stringify(res) !== localStorage.getItem('cart')) {
      localStorage.removeItem('cart');
      res['quantity'] = 1;
      localStorage.setItem('cart', JSON.stringify(res));
    }
    let cart = JSON.parse(localStorage.getItem('cart')!);
    return of(cart);
  }

  getCart(): Observable<any> {
    let res: any;
    if (!localStorage.getItem('cart')) {
      res = undefined;
    } else {
      res = JSON.parse(localStorage.getItem('cart')!);
    }

    return of(res);
  }

  clearCart(): void {
    localStorage.removeItem('cart');
  }

  createCartHistory(res: Restaurant, total: number, date: string): void {
    (res['totalHistory'] = total), (res['dateTimeHistory'] = date);
    localStorage.setItem('cartHistory', JSON.stringify(res));
  }

  getCartHistory(): Observable<any> {
    let res: Restaurant;
    res = JSON.parse(localStorage.getItem('cartHistory')!);

    return of(res);
  }

  historyExists(): boolean {
    if (!localStorage.getItem('cartHistory')) {
      return false;
    } else return true;
  }

  clearCartHistory(): void {
    localStorage.removeItem('cartHistory');
  }

  updateUser(name: string, cell: string, email: string) {
    if ((name && cell && email !== undefined) || null) {
      let user: user = {
        id: 1,
        full_name: name,
        cellNum: cell,
        email: email,
      };
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      let user = {
        id: 1,
        full_name: 'Rowdy Peterson',
        cellNum: '075 145 8569',
        email: 'rowdypeterson@mail.com',
      };
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}
