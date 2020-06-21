import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PRODUITS_ADD_ROUTES, PRODUITS_EDIT_ROUTES, PRODUITS_LIST_ROUTES} from './produit/produits.route';

@NgModule({
  imports: [
    RouterModule.forChild([
      PRODUITS_LIST_ROUTES,
      PRODUITS_ADD_ROUTES,
      PRODUITS_EDIT_ROUTES
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class StockRouting {
}
