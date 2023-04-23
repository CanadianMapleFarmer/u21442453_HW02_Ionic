import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
// import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

@NgModule({
  declarations: [CartPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    // ExploreContainerComponentModule,
  ],
})
export class CartPageModule {}
