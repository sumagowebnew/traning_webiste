import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-syllabus-module',
  templateUrl: './syllabus-module.component.html',
  styleUrls: ['./syllabus-module.component.css']
})
export class SyllabusModuleComponent  implements OnInit{

  ProgramFeesFormData:FormGroup
  ProgramFeesData:any[]
  courseDetails: any[] = [];
  subcourseDetails
  editData:any
  constructor(private service:CounterService,private formBuilder:FormBuilder){
    this.ProgramFeesFormData = this.formBuilder.group({
      
      course_id: [''],
      module_id: [''],
     
      title: ['',Validators.required],
      description: ['',Validators.required],
    
    });
  }


  ngOnInit(): void {
    this.getProgramFeesData()
    this.getCourse();
    this.getmodule();
   
  }
  getmodule(){

    this.service.getmodule().subscribe((res: any) => {
      this.subcourseDetails = res
      console.log(this.subcourseDetails);
    });
  }

  getCourse(){
    this.service.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });

  }

  onSubmit(){
    const formData = new FormData();
  const formValue = this.ProgramFeesFormData.value;
  
  Object.keys(formValue).forEach(key => {
    formData.append(key, formValue[key]);
  });

  this.service.addsyllabus(formData).subscribe(
    (response: any) => {
      console.log('Data added successfully:', response);
      // Optionally reset the form after submission
      this.ProgramFeesFormData.reset();
    },
    (error) => {
      console.error('Failed to add data:', error);
    }
  );
  }


  getProgramFeesData(){
    this.service.getsyllabus().subscribe((res:[])=>{
      this.ProgramFeesData = res
      console.log(res);
      
    })
  }
  deleteProgramFeesData(id:number){
    const confirmDelete = confirm('Are you sure you want to delete this record?');
    
    if (confirmDelete) {
      this.service.deletesyllabus(id).subscribe(
        () => {
          console.log('Data deleted successfully');
          // You can also refresh the data or perform other actions here
        },
        error => {
          console.error('Failed to delete data:', error);
        }
      );
    }
  }

}