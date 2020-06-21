import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StockRouting} from './stock-routing.module';
import {ProduitListComponent} from './produit/produit-list/produit-list.component';
import {ProduitAddComponent} from './produit/produit-add/produit-add.component';
import {MatCardModule} from '@angular/material/card';
import {NgxSelectModule} from 'ngx-select-ex';


@NgModule({
  declarations: [ProduitListComponent, ProduitAddComponent],
  imports: [
    SharedModule,
    StockRouting,
    MatCardModule,
    NgxSelectModule
  ]
})
export class StockModule {
}
