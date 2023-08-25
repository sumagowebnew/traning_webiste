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
  joinedCounterData: any;
  joinedData: any;
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

    this.getsubcourse();
    this.getcounterdata();
   
  }
  getcounterdata() {
    this.service.getmodule().subscribe((res: any) => {
      this.counterlist = res.data;
      this.joinTables();
    });
  }

  getsubcourse() {
    this.service.getsubcourse().subscribe((res: any) => {
      this.subcourses = res.data;
      this.joinTables();
    });
  }

  getProgramFeesData() {
    this.service.getsyllabus().subscribe((res: any) => {
      this.ProgramFeesData = res.data;
      this.joinTables();
    });
  }
  joinTables(): void {
    if (this.counterlist.length > 0 && this.subcourses.length > 0 && this.ProgramFeesData.length > 0) {
      this.joinedData = this.counterlist.map((counter) => {
        const matchingSubcourse = this.subcourses.find(subcourse => subcourse.subcourse_id === counter.module_id);
        const matchingProgramFees = this.ProgramFeesData.find(programFees => programFees.course_id === counter.course_id);
        
        return {
          ...counter,
          subcourses_name: matchingSubcourse ? matchingSubcourse.subcourses_name : 'Unknown Course',
          course_id: matchingProgramFees ? matchingProgramFees.course_id : 'Unknown Fees'
        };
      });
    }
  }
  onSubmit(){
    const formData = new FormData();
  const formValue = this.ProgramFeesFormData.value;
  
  Object.keys(formValue).forEach(key => {
    formData.append(key, formValue[key]);
  });

  this.service.addsyllabus(formData).subscribe(
    (response: any) => {
      if(response.StatusCode == '200') {
        // this.router.navigate(['/main/banner'])
        alert("Data added successfully");
        location.reload();

      } else {
        alert("Something went wrong");
      }
    },
  );
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
