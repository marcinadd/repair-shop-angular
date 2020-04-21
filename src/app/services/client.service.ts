import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../model/Client';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiClientUrl = environment.apiUrl + '/clients';

  constructor(private http: HttpClient) {
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiClientUrl, client, httpOptions);
  }

  getClients(): Observable<Client[]> {
    console.log(this.apiClientUrl);
    return this.http.get<Client[]>(this.apiClientUrl);
  }

  getClientsByLastNameStartsWith(lastNameStartsWith): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiClientUrl}?lastNameStartsWith=${lastNameStartsWith}`);
  }
}
