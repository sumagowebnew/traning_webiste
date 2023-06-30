import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router,private authservice:AuthService){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean {
      if(!this.authservice.isLoggedIn()){
        this.router.navigate(['sign-in']);
        // return false;
      }
      return this.authservice.isLoggedIn();
    }
};