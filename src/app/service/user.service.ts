import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as url from './constant'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: any = {};
  constructor(private http: HttpClient) { }

  setUser(data){
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  setUserLogout(){
    this.user = {};
  }

  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

  
  login(credentials): Observable<any> {
    return this.http.post(url.urlLogin, credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

}
