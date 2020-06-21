import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from './layout/main-content/main-content.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/utilisateurs',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainContentComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'stock',
        loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
      },
      {
        path: 'gestion-enfant',
        loadChildren: () => import('./gestion-enfants/gestion-enfants.module').then(m => m.GestionEnfantsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
