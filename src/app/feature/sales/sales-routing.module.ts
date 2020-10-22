import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  { path: '', component: SchedulerComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
