import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,  Observable,  of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8000/api/';                                  // Your API URL here
  private token ="12312";
  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor(private router:Router,private http:HttpClient) { }

  // login(email:string,password: string):Observable<any>{
  //   if(email=='mohini@gmail.com' && password =='12345678'){
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({name:'mohini',email:'admin@gmail.com'});

  //   }
  //   return throwError("Failed")
  // }
  
  setToken(token:string):void{
    localStorage.setItem('token',token)
  }

  getToken():string |null {
    return localStorage.getItem('token')
  }

  isLoggedIn(){
     return this.getToken()!==null
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['sign-in']);
  }
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}login`;
    return this.http.post(url, { email, password }).pipe(
      tap((response: any) => {
        this.setToken(response.token);
        // this.setUser(response.id,response.username,response.email)
        localStorage.setItem('token', response.token);
        localStorage.setItem('email',response.email)
        localStorage.setItem('id',response.id)
        return response;
      })
    );
  }
 




}
