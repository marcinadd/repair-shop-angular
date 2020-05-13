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

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.apiFormUrl);
  }

  getFormById(formId: string): Observable<Form> {
    return this.http.get<Form>(this.apiFormUrl + '/' + formId);
  }

  patchForm(form: Form): Observable<Form> {
    return this.http.patch<Form>(this.apiFormUrl + '/' + form.id, form, environment.httpOptions);
  }

  getFormInfo(formId: number, password: string): Observable<Form> {
    return this.http.post<Form>(`${this.apiFormUrl}/${formId}/info`, password, environment.httpOptions);
  }
}
