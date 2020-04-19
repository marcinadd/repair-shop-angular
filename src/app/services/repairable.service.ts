import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Repairable} from '../model/Repairable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RepairableService {
  apiRepairableUrl = environment.apiUrl + '/repairables';

  constructor(private http: HttpClient) {
  }

  addRepairable(repairable: Repairable): Observable<Repairable> {
    return this.http.post<Repairable>(this.apiRepairableUrl, repairable, httpOptions);
  }
}
