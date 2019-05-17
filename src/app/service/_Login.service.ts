import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as url from './constant'
@Injectable({
    providedIn: 'root'
  })
export class _Login {
    constructor(private http: HttpClient) { }
    
    
}