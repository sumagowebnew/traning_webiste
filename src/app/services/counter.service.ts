import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }


  addcounter(counterdata: any) {
  return this.http.post(`${this.apiUrl}add_home_counter`, counterdata);
  }

  getcounter() {
    return this.http.get(`${this.apiUrl}get_home_counter`)
  }
  getapplynow() {
    return this.http.get(`${this.apiUrl}get_applyNow`)
  }

  addteacher(teacherdata:any){
    return this.http.post(`${this.apiUrl}add_teacher`,teacherdata)
  }

  getapply_now(){
    return this.http.get(`${this.apiUrl}get_applyNow`)
  }
  


}
