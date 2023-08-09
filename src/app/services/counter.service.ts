import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient, private auth: AuthService) { }


  //Home Counter
  addcounter(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_home_counter`, counterdata, { headers });
  }

  getcounter() {

    return this.http.get(`${this.apiUrl}get_home_counter`)
  }
  updateArchivement(id: number, archive: any) {


    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_home_counter/${id}`;
    return this.http.post(url, archive, { headers });
  }
  deletearchivement(id: number) {
    const url = `${this.apiUrl}delete_home_counter/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }


  //Home Apply now

  getapply_now() {
    return this.http.get(`${this.apiUrl}get_applyNow`)
  }
  deleteapply_now(id: number) {
    const url = `${this.apiUrl}delete_applyNow/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }



  //Popular course
  getpopularcourse() {
    return this.http.get(`${this.apiUrl}get_popularCourses`)
  }
  addpopularcourse(popularcourse: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_popularCourses`, popularcourse, { headers })
  }

  deletepopular1(id: number) {
    const url = `${this.apiUrl}delete_popularCourses/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }
  updatepopular(id: number, archive: any) {


    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_popularCourses/${id}`;
    return this.http.post(url, archive, { headers });
  }


  //Popular details

  deletepopular(id: number) {
    const url = `${this.apiUrl}delete_popularCoursesDetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }
  getpopularcoursedetails() {
    return this.http.get(`${this.apiUrl}get_popularCoursesDetails`)
  }
  addpopularcoursedetail(popularcourse: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_popularCoursesDetails`, popularcourse, { headers })
  }
  updatepopulardetail(id: number, archive: any) {


    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_popularCoursesDetails/${id}`;
    return this.http.post(url, archive, { headers });
  }



  //Certificate

  addcertificate(certificate: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_certificate`, certificate, { headers })
  }
  getcertificate() {
    return this.http.get(`${this.apiUrl}get_certificate`)
  }
  deletecertificate(id: number) {
    const url = `${this.apiUrl}delete_certificate/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }



  //Expert Review

  addexpertreview(expert: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_expertReview`, expert, { headers })
  }
  getexpertreview() {
    return this.http.get(`${this.apiUrl}get_expertReview`)
  }

  updateExpert(id: number, expert: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_expertReview/${id}`;
    return this.http.post(url, expert, { headers });
  }

  deleteexpert(id: number): Observable<any> {
    const url = `${this.apiUrl}delete_expertReview/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }

  //Consulting

  addconsulting(consult: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_consulting`, consult, { headers })
  }
  getconsulting() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_consulting`, { headers })
  }
  updateconsulting(id: number, consult: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_expertReview/${id}`;
    return this.http.post(url, consult, { headers });
  }

  deleteconsulting(id: number) {
    const url = `${this.apiUrl}delete_consulting/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }





}
