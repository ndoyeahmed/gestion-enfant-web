import {Route} from '@angular/router';
import {AuthGuardService} from '../../shared/auth/auth-guard.service';
import {InscriptionComponent} from './inscription/inscription.component';

export const INSCRIPTION_ROUTES: Route = {
  path: 'inscription',
  component: InscriptionComponent,
  canActivate: [AuthGuardService]
};
