import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


SignInForm= new FormGroup({

  email: new FormControl(''),
  password:new FormControl('')
})
  email: string;
constructor(private auth:AuthService,private router:Router){}

ngOnInit(): void {

  
}

token:string =''

onSubmit():void{
  console.log(this.SignInForm.valid);
  const { email, password } = this.SignInForm.value;
  if(this.SignInForm.valid){

    this.auth.login(email,password).subscribe((result)=>{
        console.log("Success")
        // console.log(result.access_token);
        console.log(result);   
        
        this.auth.setToken(result.access_token)
       console.log( this.auth.getToken());
        this.router.navigate(['main']);

    
       
    },
    (err:Error)=>{
      console.log(err);
      (err.message);
    }

    )
  }
  

}
}
