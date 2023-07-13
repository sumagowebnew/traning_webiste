import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {
  consultform: any;
  consult: any;
  consultlist: any;

  constructor(private count:CounterService,private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.addconsulting();
    this.getconsult();
    
  }
  addconsulting(): void {
    this.consultform = this.formBuilder.group({
      fname:['',Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      company_name: ['', Validators.required],
    });
  }

 
  onSubmit(): void {
   

    const formData = new FormData();
    formData.append('fname',this.consultform.value.fname),
    formData.append('lname', this.consultform.value.lname);
    formData.append('email', this.consultform.value.email);
    formData.append('company_name', this.consultform.value.company_name);
    

    this.count.addconsulting(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.consult = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }
  getconsult(){
    this.count.getconsulting().subscribe((res:any)=>{
      console.log(res);
      
      this.consultlist=res.data;

    })
  }
}
