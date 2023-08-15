import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-program-fees-list',
  templateUrl: './program-fees-list.component.html',
  styleUrls: ['./program-fees-list.component.css']
})
export class ProgramFeesListComponent implements OnInit {
  ProgramFeesFormData: FormGroup
  ProgramFeesData: any[]
  courseDetails: any[] = [];
  subcourseDetails
  editData: any
  constructor(private service: CounterService, private formBuilder: FormBuilder) {
    this.ProgramFeesFormData = this.formBuilder.group({
      pro_max_id: ['1'], // Initialize with default values if needed
      course_id: [''],
      sub_course_id: [''],
      sub_course_fee: ['', Validators.required], 
      sub_course_duration: ['', Validators.required], 
      job_assistance: ['Yes', Validators.required],
      
      live_class_subscription: ['Yes'],
      lms_subscription: ['Yes'],
      job_referrals: ['Yes'],
      industry_projects: ['Yes'],
      capstone_projects: ['Yes'],
      domain_training: ['Yes'],
      project_certification_from_companies: ['Yes'],
      adv_ai_dsa: ['Yes'],
      microsoft_certification: ['Yes']
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

  getCourse() {
    this.service.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });
  }

  onSubmit() {
    const formData = new FormData();
    const formValue = this.ProgramFeesFormData.value;

    Object.keys(formValue).forEach(key => {
      formData.append(key, formValue[key]);
    });

  

    this.service.addProgramFees(formData).subscribe(
      (response: any) => {
        this.ProgramFeesFormData.reset();
        if (response.StatusCode == '200') {
          // this.router.navigate(['/main/banner'])
          alert("Data added successfully");
          location.reload();
        } else {
          alert("Something went wrong");
        }
      },
      (error) => {
        console.error('Failed to add data:', error);
      }
    );
  }


  getProgramFeesData() {
    this.service.getProgramFees().subscribe((res: []) => {
      this.ProgramFeesData = res
      console.log(res);

    })
  }
  deleteProgramFeesData(id: number) {
    alert(id);
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
  updateProgramFeesData(id: number) { }

  getSubCourseFromCourse(event) {
    var obj = {
      course_id: event.target.value
    };

    this.service.getSubCourse(obj).subscribe(alldist => {
      this.subcourseDetails = alldist['data'];
    });
  }

}