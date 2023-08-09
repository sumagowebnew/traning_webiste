import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewWebService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient,private auth:AuthService) { }
  
  //banner
  addbanner(banner:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_bannerImages`,banner,{headers})
  }
  getbanner(){
    return this.http.get(`${this.apiUrl}get_bannerImages`)
  }
  deletebanner(id: number) {
    const url = `${this.apiUrl}delete_bannerImages/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //hire
  addhire(hired:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_hired`,hired,{headers})
  }
  gethire(){
    return this.http.get(`${this.apiUrl}get_hired`)
  }
  updatehire(id: number, hire: any) {

    const url = `${this.apiUrl}update_hired/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, hire, { headers });
  }
  deletehire(id: number) {
    const url = `${this.apiUrl}delete_hired/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //Mentor

  addmentor(mentor:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_mentor`,mentor,{headers})
  }
  getmentor(){
    return this.http.get(`${this.apiUrl}get_mentor`)
  }
  updatementor(id: number, mentor: any) {

    const url = `${this.apiUrl}update_mentor/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, mentor, { headers });
  }
  deletementor(id: number) {
    const url = `${this.apiUrl}delete_mentor/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //Faq

  addfaq(faq:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_faq`,faq,{headers})
  }
  getfaq(){
    return this.http.get(`${this.apiUrl}get_faq`)
  }
  updatefaq(id: number, faq: any) {

    const url = `${this.apiUrl}update_faq/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, faq, { headers });
  }
  deletebfaq(id: number) {
    const url = `${this.apiUrl}delete_faq/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //Alumini

  addalumini(alumini:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_alumini`,alumini,{headers})
  }
  getalumini(){
    return this.http.get(`${this.apiUrl}get_alumini`)
  }
  updateAlumni(id: number, alumniData: any) {

    const url = `${this.apiUrl}update_alumini/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, alumniData, { headers });
  }
 

  deletealumini(id: number): Observable<any> {
    const url = `${this.apiUrl}delete_alumini/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url,{headers});
  }
  
  }



