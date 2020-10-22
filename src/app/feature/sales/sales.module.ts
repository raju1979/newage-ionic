import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulerComponent } from './scheduler/scheduler.component';


@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SalesModule { }
