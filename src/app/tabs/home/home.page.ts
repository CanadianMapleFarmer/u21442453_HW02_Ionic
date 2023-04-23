import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Restaurant } from 'src/app/shared/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  restaurants: Restaurant[] = [];
  restaurant: Restaurant = new Restaurant();
  isModalOpen = false;
  isToastOpen = false;
  modalData: Restaurant = new Restaurant();
  cartData: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRestaurants().subscribe((restaurants: any) => {
      this.restaurants = restaurants;
    });
    console.log(this.restaurants);
  }

  getRestaurant(id: number): Restaurant {
    this.dataService.getRestaurant(id).subscribe((restaurant: any) => {
      this.restaurant = restaurant;
    });
    return this.restaurant;
    console.log(this.restaurant);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  setModalData(res: Restaurant) {
    this.modalData = res;
  }

  setCartData(res: any) {
    this.cartData = res;
  }

  addToCart(res: any) {
    this.dataService.addToCart(res).subscribe((res: any) => {
      console.log(res);
    });
  }
}
