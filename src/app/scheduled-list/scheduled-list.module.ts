import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduledListPageRoutingModule } from './scheduled-list-routing.module';

import { ScheduledListPage } from './scheduled-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduledListPageRoutingModule
  ],
  declarations: [ScheduledListPage]
})
export class ScheduledListPageModule {}
