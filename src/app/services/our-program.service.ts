import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OurProgramService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http:HttpClient,private auth:AuthService) { }

  addourprogram(program:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_coursecategory`,program,{headers})

  }

  getourprogram(){
    return this.http.get(`${this.apiUrl}get_coursecategory`)
  }
  deleteourpgm(id: number) {
    const url = `${this.apiUrl}delete_coursecategory/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  addprogramdetail(eventdata:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_programdetails`,eventdata,{headers})
  }
  getprogramdetail(){
   
    return this.http.get(`${this.apiUrl}get_programdetails`)
  }
  deletepgmdetail(id: number) {
    const url = `${this.apiUrl}delete_programdetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
  
  
  addbroucher(data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_brochuer`,data,{headers})
  }
  getbroucher(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
   
    return this.http.get(`${this.apiUrl}get_brochuer`,{headers})
  }
  deletebroucher(id: number) {
    const url = `${this.apiUrl}delete_brochuer/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
 
}
