import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as url from './constant'
import { InforCandidate } from '../models/infoCandidate';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  searchJobs(obj): Observable<any>{
    return this.http.post(url.urlSearchJobs, obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  
  getJob(): Observable<any>{
    return this.http.post(url.urlGetJobs, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  editJob(obj): Observable<any>{
    return this.http.post(url.urlEditJobs,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  
  addJobs(obj): Observable<any>{
    return this.http.post(url.urlAddJobs,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  addJob(obj): Observable<any>{
    return this.http.post(url.urlAddJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  disibleJobs(obj): Observable<any>{
    return this.http.post(url.urlDisibleJobs,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  visibleJobs(obj): Observable<any>{
    return this.http.post(url.urlVisibleJobs,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getCandidate(obj): Observable<any>{
    return this.http.post(url.urlGetCandidate,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getUserJob(obj): Observable<any>{
    return this.http.post(url.urlGetUserJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  

  saveJob(obj): Observable<any>{
    return this.http.post(url.urlSaveJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  checkSaveJob(obj): Observable<any>{
    return this.http.post(url.urlCheckSaveJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
 
  unCheckSaveJob(obj): Observable<any>{
    return this.http.post(url.urlUnCheckSaveJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  findJob(obj): Observable<any>{
    return this.http.post(url.urlfindJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  getInfoCandidate(obj): Observable<any>{
    return this.http.post(url.urlGetInfoCandidate,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  applyJob(obj): Observable<any>{
    return this.http.post(url.urlApplyJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  checkApplyJob(obj): Observable<any>{
    return this.http.post(url.urlCheckApplyJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  
  AddInforCandidate(obj): Observable<any>{
    return this.http.post(url.urlAddInfoCandidate,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getSaveJob(obj): Observable<any>{
    return this.http.post(url.urlGetSaveJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getApplyJob(obj): Observable<any>{
    return this.http.post(url.urlGetApplyJob,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  candidate(obj): Observable<any>{
    return this.http.post(url.urlCandidate,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getCandidateSkill(obj): Observable<any>{
    return this.http.post(url.urlCandidate_Skill,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getSkill(): Observable<any>{
    return this.http.post(url.urlget_Skill, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  addSkill(obj): Observable<any>{
    return this.http.post(url.urlAdd_Skill,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }


  getLanguage(obj): Observable<any>{
    return this.http.post(url.urlCandidate_Language,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  addLanguage(obj): Observable<any>{
    return this.http.post(url.urladd_Language,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getExperience(obj): Observable<any>{
    return this.http.post(url.urlget_Experience,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  reviewCV(obj): Observable<any>{
    return this.http.post(url.urlReviewCV,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  checkDanhGia(obj): Observable<any>{
    return this.http.post(url.urlcheckDanhGia,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  urlupdateCV(obj): Observable<any>{
    return this.http.post(url.urlupdateCV,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getCV(obj): Observable<any>{
    return this.http.post(url.urlgetCV,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getImageCV(obj): Observable<any>{
    return this.http.post(url.urlgetImgCV,obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }




  
  
  

}
