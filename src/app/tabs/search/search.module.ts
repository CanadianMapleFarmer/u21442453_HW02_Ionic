import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    Ng2SearchPipeModule,
  ],
})
export class SearchPageModule {}
