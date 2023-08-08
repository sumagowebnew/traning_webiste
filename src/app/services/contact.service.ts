import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http:HttpClient,private auth:AuthService) { }

  getcontact(){
    return this.http.get(`${this.apiUrl}get_contact`)
  }

  deletecontact(id: number) {
    const url = `${this.apiUrl}delete_contact/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
}
