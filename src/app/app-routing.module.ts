import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
  },
  
  {
    path: 'sales',
    loadChildren: () => import('./feature/sales/sales.module').then( m => m.SalesModule)
  },
  {
    path: 'calls-list',
    loadChildren: () => import('./calls-list/calls-list.module').then( m => m.CallsListPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'scheduled-list',
    loadChildren: () => import('./scheduled-list/scheduled-list.module').then( m => m.ScheduledListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
