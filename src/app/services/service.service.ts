import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Service} from '../model/Service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiFormUrl = environment.apiUrl + '/services';

  constructor(private http: HttpClient) {
  }

  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.apiFormUrl, service, environment.httpOptions);
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiFormUrl);
  }
}
