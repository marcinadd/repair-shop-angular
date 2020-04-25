import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiFormUrl = environment.apiUrl + '/items';

  constructor(private http: HttpClient) {
  }

  addItem(item): Observable<Item> {
    return this.http.post<Item>(this.apiFormUrl, item, environment.httpOptions);
  }
}
