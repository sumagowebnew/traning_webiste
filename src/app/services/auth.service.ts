import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:3000';                                  // Your API URL here
  private token ="";
  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor(private router:Router,private http:HttpClient) { }

  // register(user: User): Observable<any> {
  //   const url = `${this.apiUrl}/register`;
  //   return this.http.post(url, user).pipe(
  //     tap((response: any) => {
  //       this.token = response.token;
  //       localStorage.setItem('token', response.token);
  //     })
  //   );
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
  // login(email: string, password: string): Observable<any> {
  //   const url = `${this.apiUrl}/login`;
  //   return this.http.post(url, { email, password }).pipe(
  //     tap((response: any) => {
  //       this.setToken(response.token);
  //       this.setUser(response.id,response.username,response.email)
  //       localStorage.setItem('token', response.token);
  //       localStorage.setItem('email',response.email)
  //       localStorage.setItem('id',response.id)
  //       return response;
  //     })
  //   );
  // }
  setUser(userId: string,username:string,email:string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
  }

  // getUser() {
  //   const UserID = localStorage.getItem('userId');
  //   const Username = localStorage.getItem('username');
  //   const Email = localStorage.getItem('email')
  //   const Both= {UserID, Username,Email}
  //   return Both
  // }

}
