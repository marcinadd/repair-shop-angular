import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Service} from '../model/Service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiServiceUrl = environment.apiUrl + '/services';

  constructor(private http: HttpClient) {
  }

  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.apiServiceUrl, service, environment.httpOptions);
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiServiceUrl);
  }

  updatePrice(serviceId: number, priceVal: number): Observable<Service> {
    return this.http.patch<Service>(`${this.apiServiceUrl}/${serviceId}`, {price: priceVal}, environment.httpOptions);
  }

  deleteService(serviceId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiServiceUrl}/${serviceId}`, environment.httpOptions);
  }
}
