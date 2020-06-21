import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {TypeDocumentModel} from '../../shared/models/gestion-enfants/type-document.model';
import {Observable, Subject} from 'rxjs';
import {DossierModel} from '../../shared/models/gestion-enfants/dossier.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  api = '/api/gestion/enfants/';

  constructor(
    private http: HttpClient
  ) {
  }

  saveTypeDocument(typeDocument: TypeDocumentModel): Observable<any> {
    return this.http.post(this.api + 'type-document', typeDocument);
  }

  listTypeDocument(archive: boolean): Observable<any> {
    return this.http.get(this.api + 'type-document/archive/' + archive);
  }

  archiveTypeDocument(id: number, archive: any): Observable<any> {
    return this.http.put(this.api + 'type-document/archive/' + id, archive);
  }

  updateTypeDocument(id: number, body: any): Observable<any> {
    return this.http.put(this.api + 'type-document/' + id, body);
  }

  typeDocumentById(id: number): Observable<any> {
    return this.http.get(this.api + 'type-document/' + id);
  }

  listSites(archive: boolean): Observable<any> {
    return this.http.get(this.api + 'sites/archive/' + archive);
  }

  listSitesByConnectedUser(): Observable<any> {
    return this.http.get(this.api + 'sites/connected-user');
  }

  inscription(dossier: DossierModel): Observable<any> {
    return this.http.post(this.api + 'inscription', dossier);
  }

}
