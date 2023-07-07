import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-archievement',
  templateUrl: './archievement.component.html',
  styleUrls: ['./archievement.component.css']
})
export class ArchievementComponent implements OnInit {
  counterlist: any;


  constructor(private counter:CounterService,private fb:FormBuilder){}
  
  counterForm: any;
 

 
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
    this.counter.addcounter(formData).subscribe(
    (response: any)=>{
      console.log('Created Successfully:', response);
            this.counter = response;    
            
          },
          (error)=>console.error('failed to add course')
        );
    }

    getcounterdata(){
      this.counter.getcounter().subscribe((res:any)=>{
        this.counterlist=res.data;
        console.log(this.counterlist);
        
      })
    }

}
