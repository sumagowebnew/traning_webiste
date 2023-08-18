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
  counterlist: any;
  bannerlist: any;
  subcourses: any;
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

    this.getSubCourse();
    this.getcounterdata();
   
  }
  getcounterdata(){
    this.service.getmodule().subscribe((res:any)=>{
      this.counterlist=res.data;
      console.log(this.counterlist);
      
    })
  }
  // getCourse(){
  //   this.service.getcourse().subscribe((res: any) => {
  //     this.courseDetails = res.data; // Assign directly, assuming the data is an array
  //     console.log(this.courseDetails);
  //   });

    
  // }
  getSubCourse() {
    this.service.getsubcourse().subscribe((res: any) => {
      console.log(res);
      this.subcourses = res;
    })
  }

  onSubmit(){
    const formData = new FormData();
  const formValue = this.ProgramFeesFormData.value;
  
  Object.keys(formValue).forEach(key => {
    formData.append(key, formValue[key]);
  });

  this.service.addsyllabus(formData).subscribe(
    (response: any) => {
      if(response.statusCode == '200') {
        // this.router.navigate(['/main/banner'])
        alert("Data added successfully");
        location.reload();

      } else {
        alert("Something went wrong");
      }
    },
  );
}


  getProgramFeesData(){
    this.service.getsyllabus().subscribe((res:[])=>{
      this.ProgramFeesData =res;
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
