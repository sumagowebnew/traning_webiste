import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-program-fees-list',
  templateUrl: './program-fees-list.component.html',
  styleUrls: ['./program-fees-list.component.css']
})
export class ProgramFeesListComponent implements OnInit {
  ProgramFeesFormData:FormGroup
  ProgramFeesData:any[]
  courseDetails: any[] = [];
  subcourseDetails
  editData:any
  constructor(private service:CounterService,private formBuilder:FormBuilder){
    this.ProgramFeesFormData = this.formBuilder.group({
      pro_max_id: [''], // Initialize with default values if needed
      course_id: [''],
      sub_course_id: [''],
      job_assistance: ['',Validators.required],
      live_class_subscription: ['required'],
      lms_subscription: ['required'],
      job_referrals: ['required'],
      industry_projects: ['required'],
      capstone_projects: ['required'],
      domain_training: ['required'],
      project_certification_from_companies: ['required'],
      adv_ai_dsa: ['required'],
      microsoft_certification: ['required']
    });
  }


  ngOnInit(): void {
    this.getProgramFeesData()
    this.getCourse()
    this.service.getsubcourse().subscribe((res: any) => {
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

  this.service.addProgramFees(formData).subscribe(
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
    this.service.getProgramFees().subscribe((res:[])=>{
      this.ProgramFeesData = res
      console.log(res);
      
    })
  }
  deleteProgramFeesData(id:number){
    const confirmDelete = confirm('Are you sure you want to delete this record?');
    
    if (confirmDelete) {
      this.service.deleteProgramFees(id).subscribe(
        () => {
          console.log('Data deleted successfully');
          // You can also refresh the data or perform other actions here
        this.getProgramFeesData()
        },
        error => {
          console.error('Failed to delete data:', error);
        }
      );
    }
  }
  updateProgramFeesData(id:number){}

}
