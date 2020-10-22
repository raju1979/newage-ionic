import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallsListPage } from './calls-list.page';

const routes: Routes = [
  {
    path: '',
    component: CallsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallsListPageRoutingModule {}
