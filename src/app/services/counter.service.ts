import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient,private auth:AuthService) { }


  addcounter(counterdata: any) {
  return this.http.post(`${this.apiUrl}add_home_counter`, counterdata);
  }

  getcounter() {
    return this.http.get(`${this.apiUrl}get_home_counter`)
  }
  getapplynow() {
    return this.http.get(`${this.apiUrl}get_applyNow`)
  }



  getapply_now(){
    return this.http.get(`${this.apiUrl}get_applyNow`)
  }
  addpopularcourse(popularcourse:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_popularCourses`,popularcourse,{headers})
  }


  getpopularcourse(){
    return this.http.get(`${this.apiUrl}get_popularCourses`)
  }

  addcertificate(certificate:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_certificate`,certificate,{headers})
  }
  getcertificate(){
    return this.http.get(`${this.apiUrl}get_certificate`)
  }
  addexpertreview(expert:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_expertReview`,expert,{headers})
  }
  getexpertreview(){
    return this.http.get(`${this.apiUrl}get_expertReview`)
  }

  addconsulting(consult:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_consulting`,consult,{headers})
  }
  getconsulting(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_consulting`,{headers})
  }
  



}
