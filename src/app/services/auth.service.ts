import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,  Observable,  of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://api.sumagotraining.in/public/api/'; 
  // private apiUrl = 'https://trainingapi.sumagotest.in/public/api/'; 
  // private apiUrl = 'https://admin.sumagotraining.in/public/api/';
   token;
  private loggedIn = new BehaviorSubject<boolean>(false);
  access_token: string;


  constructor(private router:Router,private http:HttpClient) { }

  // login(email:string,password: string):Observable<any>{
  //   if(email=='mohini@gmail.com' && password =='12345678'){
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({name:'mohini',email:'admin@gmail.com'});

  //   }
  //   return throwError("Failed")
  // }
  
  setToken(token):void{
   this.token = localStorage.setItem('access_token',token);
  }

  getToken():string | null {
  return  localStorage.getItem('access_token')
  }
 

  isLoggedIn(){
     return this.getToken()!==null
  }
  logout(): Observable<any> {
    const url = `${this.apiUrl}logout`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
  
    return this.http.post(url, null, { headers }).pipe(
      tap(() => {
        this.clearToken();
        // this.clearUser();
        localStorage.removeItem('access_token');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        this.router.navigate(['login']);
        console.log("login here");
        
      })
    );
  }
  clearToken() {
    this.token = null;
  }
  
  // logout() {
    
  //   localStorage.removeItem('access_token');
  //   this.router.navigate(['login']);
  // }
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}login`;
    return this.http.post(url, { email, password }).pipe(
      tap((response: any) => {
        this.setToken(response.access_token);
        // this.setUser(response.id,response.username,response.email)
        // localStorage.setItem('access_token', response.token);
        localStorage.setItem('email',response.email)
        localStorage.setItem('id',response.id)
        return response.access_token;
      })
    );
  }
 
}
