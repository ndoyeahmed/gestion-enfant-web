import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TypeDocumentModel} from '../../../shared/models/gestion-enfants/type-document.model';
import {MatSelectChange} from '@angular/material/select';
import {Subscription} from 'rxjs';
import {InscriptionService} from '../../services/inscription.service';
import {DocumentModel} from '../../../shared/models/gestion-enfants/document.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {SiteModel} from '../../../shared/models/gestion-enfants/site.model';
import {EnfantModel} from '../../../shared/models/gestion-enfants/enfant.model';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as moment from 'moment';
import {DossierModel} from '../../../shared/models/gestion-enfants/dossier.model';
import {MyToastrService} from '../../../shared/my-toastr/my-toastr.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit, OnDestroy {
  documentUrl = '';
  documentFileName = '';
  url = '';

  previewUrl = '';
  previewFileName = '';
  DOC_SPINNER_NAME = 'doc-list';
  INSCRIPTION_SPINNER = 'inscription';

  dateNaissance: any = null;

  subscription = [] as Subscription[];
  typeDocument = new TypeDocumentModel();
  typeDocumentList = [] as TypeDocumentModel[];
  document = new DocumentModel();
  documentList = [] as DocumentModel[];
  siteList = [] as SiteModel[];
  site = new SiteModel();
  enfant = new EnfantModel();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: MyToastrService,
    private inscriptionService: InscriptionService
  ) {
  }

  ngOnDestroy(): void {
        this.subscription.forEach(s => s.unsubscribe());
    }

  ngOnInit(): void {
    this.loadTypeDocument();
    this.loadSites();
  }

  loadSites() {
    this.subscription.push(
      this.inscriptionService.listSitesByConnectedUser().subscribe(
        (data) => {
          this.siteList = data;
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

  loadTypeDocument() {
    this.subscription.push(
      this.inscriptionService.listTypeDocument(false).subscribe(
        (data) => {
          this.typeDocumentList = data;
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

  clearInscriptionForm() {
    this.enfant = new EnfantModel();
    this.url = null;
    this.site = new SiteModel();
    this.clearDocumentForm();
  }

  inscription() {
    if (this.enfant && this.enfant.nom && this.enfant.prenom && this.enfant.dateNaissance
      && this.enfant.genre && this.enfant.adresse && this.enfant.telephone) {
      if (this.enfant.nom !== '' && this.enfant.prenom !== ''
        && this.enfant.genre !== '' && this.enfant.adresse !== '' && this.enfant.telephone !== '') {
        if (this.site && this.site.id && this.documentList && this.documentList.length > 0) {
          this.spinner.show(this.INSCRIPTION_SPINNER);
          if (this.url && this.url !== '') {
            this.enfant.photo = this.url;
          } else {
            this.enfant.photo = null;
          }
          const dossier = new DossierModel();
          dossier.enfant = this.enfant;
          dossier.documents = this.documentList;
          console.log(dossier);
          this.subscription.push(
            this.inscriptionService.inscription(dossier).subscribe(
              (data) => {
                if (data && data.id) {
                  this.toast.success();
                } else {
                  this.toast.error();
                }
              },
              (error) => {
                this.toast.error();
                this.spinner.hide(this.INSCRIPTION_SPINNER);
              }, () => {
                this.clearInscriptionForm();
                this.spinner.hide(this.INSCRIPTION_SPINNER);
              }
            )
          );
        } else {
          this.toast.error('remplir la section autres informations à fournir');
        }
      } else {
        this.toast.error('remplir tous les infos de l\'enfant');
      }
    } else {
      this.toast.error('remplir tous les infos de l\'enfant');
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event1: any) => { // called once readAsDataURL is completed
          this.url = event1.target.result;
        };
      } else {
        this.toast.error('Type du fichier non valide. Veuillez choisir un fichier au format PNG ou JPEG ou JPG SVP');
      }
    }
  }

  public delete() {
    this.url = null;
  }

  /*addFiles() {
    this.file.nativeElement.click();
  }*/

  /*onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (const key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }*/

  onSelectedTypeDocument($event: MatSelectChange) {
    this.typeDocument = $event.value as TypeDocumentModel;
  }

  onFilesAdded(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].type === 'application/pdf') {
        this.documentFileName = event.target.files[0].name;
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event1: any) => { // called once readAsDataURL is completed
          this.documentUrl = event1.target.result;
        };
      } else {
        this.toast.error('Type du fichier non valide. Veuillez choisir un fichier pdf SVP');
      }
    }
  }

  clearDocumentForm() {
    this.document = new DocumentModel();
    this.typeDocument = new TypeDocumentModel();
    this.documentUrl = '';
    this.documentFileName = '';
  }

  addDocument() {
    if (this.typeDocument && this.typeDocument.id
      && this.document.libelle && this.documentUrl
      && this.documentUrl !== '') {
      this.document.document = this.documentUrl;
      this.document.typeDocument = this.typeDocument;
      this.documentList.push(this.document);
      this.clearDocumentForm();
    }
  }

  previewDoc(doc: string, filename: string) {
    /*const linkSource = doc ;
    const downloadLink = document.createElement('a');

    downloadLink.href = linkSource;
    downloadLink.download = filename;
    downloadLink.click();*/
    this.spinner.show(this.DOC_SPINNER_NAME);
    this.previewUrl = doc;
    this.previewFileName = filename;
    this.spinner.hide(this.DOC_SPINNER_NAME);
  }

  deleteDoc(doc: DocumentModel) {
    this.documentList.splice(this.documentList.indexOf(doc));
  }

  onSelectedSite($event: MatSelectChange) {
    this.site = $event.value as SiteModel;
  }

  onSelectedDate(event) {
    this.dateNaissance = moment(event.target.value);
    this.enfant.dateNaissance = this.dateNaissance;
    console.log(this.enfant.dateNaissance );
  }
}
