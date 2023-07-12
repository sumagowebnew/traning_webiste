import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http:HttpClient) { }

  getcontact(){
    return this.http.get(`${this.apiUrl}get_contact`)
  }

}
