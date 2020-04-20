import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Form} from '../model/Form';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  apiFormUrl = environment.apiUrl + '/forms';

  constructor(private http: HttpClient) {
  }

  addForm(form: Form): Observable<Form> {
    return this.http.post<Form>(this.apiFormUrl, form, environment.httpOptions);
  }
}
