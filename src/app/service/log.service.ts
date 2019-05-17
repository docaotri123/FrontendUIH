import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as url from './constant'

@Injectable({
  providedIn: 'root'
})

export class LogService {
  constructor(private http: HttpClient) { }
  logIn(obj): Observable<any>{
    return this.http.post(url.Login,obj,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
 
}
