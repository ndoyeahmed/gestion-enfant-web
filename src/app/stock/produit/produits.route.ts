import {Route} from '@angular/router';
import {ProduitListComponent} from './produit-list/produit-list.component';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {ProduitAddComponent} from './produit-add/produit-add.component';

export const PRODUITS_LIST_ROUTES: Route = {
  path: 'produits',
  component: ProduitListComponent,
  canActivate: [AuthGuardService]
};

export const PRODUITS_ADD_ROUTES: Route = {
  path: 'produits-add',
  component: ProduitAddComponent,
  canActivate: [AuthGuardService]
};

export const PRODUITS_EDIT_ROUTES: Route = {
  path: 'produits-edit/:id',
  component: ProduitAddComponent,
  canActivate: [AuthGuardService]
};

