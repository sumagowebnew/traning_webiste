import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient,private auth:AuthService) { }

  addaboutcounter(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_about_counter`, counterdata,{headers});
    }
  
    getaboutcounter() {
      return this.http.get(`${this.apiUrl}get_about_counter`)
    }

    deletecounter(id:number){
      const url = `${this.apiUrl}delete_about_counter/${id}`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.delete(`${url}`,{headers});
    }

    addteacher(teacherdata:any){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.post(`${this.apiUrl}add_teacher`,teacherdata,{headers})
    }
    getteacher(){
      return this.http.get(`${this.apiUrl}get_teacher`)
    }
    updateabout(id: number, teacherdata: any) {

      const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
        });
        
        const url = `${this.apiUrl}update_expertReview/${id}`;
        return this.http.post(url, teacherdata, { headers });
      }

    addgooglereview(review:any){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.post(`${this.apiUrl}add_googleReview`,review,{headers})
    }
    getgooglereview(){
      return this.http.get(`${this.apiUrl}get_googleReview`)
    }
    deletebgooglereview(id: number) {
      const url = `${this.apiUrl}delete_googleReview/${id}`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.delete(`${url}`,{headers});
    }
    updategooglereview(id: number, google: any) {

      const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
        });
        
        const url = `${this.apiUrl}update_googleReview/${id}`;
        return this.http.post(url, google, { headers });
      }

}
