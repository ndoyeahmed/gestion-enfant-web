import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';
import {ProduitsService} from '../../services/produits.service';
import {Subscription} from 'rxjs';
import {ProduitModel} from '../../../shared/models/stock/produit.model';
import {CategorieModel} from '../../../shared/models/stock/categorie.model';
import {INgxSelectOption} from 'ngx-select-ex';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit {
  id: number;
  subscription = [] as Subscription[];
  SPINNER_NAME = 'module-form';

  produit = new ProduitModel();
  categories = [] as CategorieModel[];
  categorie: CategorieModel;

  // -------------- image upload variable --------------------------
  selectedFiles: FileList;
  url = '';
  // -------------- end image upload variable --------------------------

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toast: MyToastrService,
    private produitsService: ProduitsService
  ) {
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.subscription.push(
      this.produitsService.categorieList().subscribe(
        (data) => this.categories = data,
        (error) => console.log(error)
      )
    );
  }

  save() {
    this.produit.categorie = this.categorie;
    console.log(this.produit);
  }

  delete() {
  }

  onSelectFile($event: Event) {

  }

  onSelectedCategorie($event: INgxSelectOption[]) {
    this.categorie = $event[0].data;
  }
}
