import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Form} from '../model/Form';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Page} from '../model/Page';

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

  getPageOfFormsByStatus(status: string, page: number, itemsPerPage: number): Observable<Page<Form>> {
    const params = new HttpParams()
      .set('status', status)
      .set('page', String(page))
      .set('itemsPerPage', String(itemsPerPage));
    return this.http.get<Page<Form>>(this.apiFormUrl, {params});
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
