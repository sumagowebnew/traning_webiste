import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-commonmain',
  templateUrl: './commonmain.component.html',
  styleUrls: ['./commonmain.component.css']
})
export class CommonmainComponent implements OnInit {
constructor(private auth:AuthService,private router:Router){}
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['main']);
    }
    this.auth.getToken()
  }

  logout(){
    this.auth.logout();
  }

}
