import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  api = '/api';
  constructor(private http: HttpClient) {
  }

  categorieList(): Observable<any> {
    return this.http.get(this.api + '/categories');
  }
}
