import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Part} from '../model/Part';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  apiPartUrl = environment.apiUrl + '/parts';

  constructor(private http: HttpClient) {
  }

  addPart(part: Part): Observable<Part> {
    return this.http.post<Part>(this.apiPartUrl, part, environment.httpOptions);
  }

  updatePrice(partId: number, priceVal: number): Observable<Part> {
    return this.http.patch<Part>(`${this.apiPartUrl}/${partId}`, {price: priceVal}, environment.httpOptions);
  }

  updatePart(partId: number, toUpdate: Part): Observable<Part> {
    return this.http.patch<Part>(`${this.apiPartUrl}/${partId}`, toUpdate, environment.httpOptions);
  }

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiPartUrl);
  }

  deletePart(partId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiPartUrl}/${partId}`);
  }
}
