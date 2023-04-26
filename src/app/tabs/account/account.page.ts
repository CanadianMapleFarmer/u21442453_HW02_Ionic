import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { user } from '../../shared/user';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user: user = new user();
  pastOrder: any;
  isModalOpen = false;
  isUserModalOpen = false;
  isToastOpen = false;
  name: string = '';
  cell: string = '';
  email: string = '';
  @ViewChild(IonModal) userModal!: IonModal;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUser().subscribe((user: any) => {
      this.user = user;
    });

    this.dataService.getCartHistory().subscribe((cart: any) => {
      this.pastOrder = cart;
    });
  }

  setOpen(isOpen: boolean): void {
    this.isModalOpen = isOpen;
  }

  setUserOpen(isOpen: boolean): void {
    this.isUserModalOpen = isOpen;
  }

  setOpenToast(isOpen: boolean): void {
    this.isToastOpen = isOpen;
  }

  historyExists(): boolean {
    return this.dataService.historyExists();
  }

  placeOrderHistory(): void {
    delete this.pastOrder.dateTimeHistory;
    delete this.pastOrder.totalHistory;
    this.dataService.addToCart(this.pastOrder);
    this.dataService.clearCartHistory();
  }

  onConfirm(): void {
    this.dataService.updateUser(this.name, this.cell, this.email);
  }
}
