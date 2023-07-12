import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-counter',
  templateUrl: './about-counter.component.html',
  styleUrls: ['./about-counter.component.css']
})
export class AboutCounterComponent implements OnInit {

  
  aboutcount: any;
  counterlist: any;
  counterForm: any;
  counter: any;

  constructor(private about:AboutService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.createCounterForm();
    this.getcounterdata();
  }

  createCounterForm() {
    this.counterForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
    });

  }
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.counterForm.value.name);
    formData.append('count', this.counterForm.value.count);
   
    // Call your CourseService method to upload the course with the formData
    this.about.addaboutcounter(formData).subscribe(
    (response: any)=>{
      console.log('Created Successfully:', response);
            this.counter = response;    
            
          },
          (error)=>console.error('failed to add course')
        );
    }

    getcounterdata(){
      this.about.getaboutcounter().subscribe((res:any)=>{
        this.counterlist=res.data;
        console.log(this.counterlist);
        
      })
    }



}
