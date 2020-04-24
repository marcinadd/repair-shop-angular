import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Buyable} from '../model/Buyable';

@Injectable({
  providedIn: 'root'
})
export class BuyableService {
  apiFormUrl = environment.apiUrl + '/buyables';

  constructor(private http: HttpClient) {
  }

  getBuyables(): Observable<Buyable[]> {
    return this.http.get<Buyable[]>(this.apiFormUrl);
  }

}
