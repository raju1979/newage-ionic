import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallsListPageRoutingModule } from './calls-list-routing.module';

import { CallsListPage } from './calls-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallsListPageRoutingModule
  ],
  declarations: [CallsListPage]
})
export class CallsListPageModule {}
