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

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiPartUrl);
  }

}
