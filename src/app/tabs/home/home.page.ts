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
  }

  setOpen(isOpen: boolean): void {
    this.isModalOpen = isOpen;
  }

  setOpenToast(isOpen: boolean): void {
    this.isToastOpen = isOpen;
  }

  setModalData(res: Restaurant): void {
    this.modalData = res;
  }

  setCartData(res: any): void {
    this.cartData = res;
  }

  addToCart(res: any): void {
    this.dataService.addToCart(res);
  }
}
