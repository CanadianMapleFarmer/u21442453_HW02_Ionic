import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/restaurant';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: Restaurant = new Restaurant();
  values: {} | undefined | any;
  isModalOpen = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCart().subscribe((restaurant: any) => {
      this.cart = restaurant;
    });
    this.getValues();
  }

  getValues(): any {
    if (this.cart === undefined) {
      return null;
    }
    let quantity = this.cart.quantity || 0;
    let price = this.cart.price;
    let deliveryFee = 30;
    let subtotal = price * quantity;
    let paymentTotal = subtotal + deliveryFee;
    this.values = {
      Quantity: quantity,
      SubTotal: subtotal,
      DeliveryFee: deliveryFee,
      PaymentTotal: paymentTotal,
    };

    console.log(this.values);
  }

  isCartEmpty(): boolean {
    if (this.cart === undefined || null) {
      return true;
    } else {
      return false;
    }
  }

  setOpen(isOpen: boolean): void {
    this.isModalOpen = isOpen;
  }

  clearCart(): void {
    this.dataService.clearCart();
  }

  clearCartHistory(): void {
    this.dataService.clearCartHistory();
  }

  createCartHistory(): void {
    this.clearCartHistory();
    let date = new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    this.dataService.createCartHistory(
      this.cart,
      this.values.PaymentTotal,
      date
    );
  }
}
