import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
// import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

@NgModule({
  declarations: [AccountPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    // ExploreContainerComponentModule,
  ],
})
export class AccountPageModule {}
