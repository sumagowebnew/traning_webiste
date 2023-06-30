import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

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

ngOnInit(): void {
  
}
onSubmit():void{
  console.log(this.SignInForm.value);
  

}
}
