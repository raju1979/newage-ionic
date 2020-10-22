import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduledListPage } from './scheduled-list.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduledListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduledListPageRoutingModule {}
