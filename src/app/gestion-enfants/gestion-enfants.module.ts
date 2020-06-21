import { NgModule } from '@angular/core';
import { TypeDocumentAddComponent } from './type-document/type-document-add/type-document-add.component';
import { TypeDocumentListComponent } from './type-document/type-document-list/type-document-list.component';
import {SharedModule} from '../shared/shared.module';
import {GestionEnfantsRouting} from './gestion-enfants-routing.module';
import { InscriptionComponent } from './gestion-dossier/inscription/inscription.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {PdfViewerModule} from 'ng2-pdf-viewer';



@NgModule({
  declarations: [TypeDocumentAddComponent, TypeDocumentListComponent, InscriptionComponent],
  imports: [
    SharedModule,
    GestionEnfantsRouting,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    PdfViewerModule
  ]
})
export class GestionEnfantsModule { }
