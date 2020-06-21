import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UtilisateurComponent} from './utilisateur/utilisateur/utilisateur.component';
import {UtilisateurAddComponent} from './utilisateur/utilisateur-add/utilisateur-add.component';
import {MatCardModule} from '@angular/material/card';
import {NgxSelectModule} from 'ngx-select-ex';


@NgModule({
  declarations: [UtilisateurComponent, UtilisateurAddComponent],
  imports: [
    AdminRoutingModule,
    SharedModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatCardModule,
    NgxSelectModule
  ]
})
export class AdminModule { }
