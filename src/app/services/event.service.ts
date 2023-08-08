import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http:HttpClient,private auth:AuthService) { }

  addevent(event:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_events`,event,{headers})
  }
  getevent(){
    return this.http.get(`${this.apiUrl}get_events`)
  }
  deleteevent(id: number) {
    const url = `${this.apiUrl}delete_events/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  addeventdetail(eventdata:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_eventDetails`,eventdata,{headers})
  }
  geteventdetail(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_eventDetails`,{headers})
  }
  deleteeventdetail(id: number) {
    const url = `${this.apiUrl}delete_eventDetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
 
    
  }



