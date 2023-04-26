import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Restaurant } from 'src/app/shared/restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  restaurants: Restaurant[] = [];
  restaurant: Restaurant = new Restaurant();
  results: any;
  filterTerm!: string;
  isToastOpen = false;
  cartData: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRestaurants().subscribe((restaurants: any) => {
      this.restaurants = restaurants;
    });
    this.results = [...this.restaurants];
  }

  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
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
