import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TYPE_DOCUMENT_ADD_ROUTES, TYPE_DOCUMENT_EDIT_ROUTES, TYPE_DOCUMENT_LIST_ROUTES} from './type-document/type-document.route';
import {INSCRIPTION_ROUTES} from './gestion-dossier/gestion-dossier.route';

@NgModule({
  imports: [
    RouterModule.forChild([
      TYPE_DOCUMENT_ADD_ROUTES,
      TYPE_DOCUMENT_EDIT_ROUTES,
      TYPE_DOCUMENT_LIST_ROUTES,
      INSCRIPTION_ROUTES
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class GestionEnfantsRouting {
}
