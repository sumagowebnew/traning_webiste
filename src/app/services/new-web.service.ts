import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewWebService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient,private auth:AuthService) { }
  
  addbanner(banner:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_bannerImages`,banner,{headers})
  }
  getbanner(){
    return this.http.get(`${this.apiUrl}get_bannerImages`)
  }

  addhire(hired:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_hired`,hired,{headers})
  }
  gethire(){
    return this.http.get(`${this.apiUrl}get_hired`)
  }
  addmentor(mentor:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_mentor`,mentor,{headers})
  }
  getmentor(){
    return this.http.get(`${this.apiUrl}get_mentor`)
  }

  addfaq(faq:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_faq`,faq,{headers})
  }
  getfaq(){
    return this.http.get(`${this.apiUrl}get_faq`)
  }
  addalumini(alumini:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_alumini`,alumini,{headers})
  }
  getalumini(){
    return this.http.get(`${this.apiUrl}get_alumini`)
  }


}
