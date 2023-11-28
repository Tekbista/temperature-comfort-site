import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  base_url = "../../../assets/db.json"

  constructor(private http: HttpClient) { }

  getServices(): Observable<any>{
    return this.http.get(this.base_url);
  }
}
