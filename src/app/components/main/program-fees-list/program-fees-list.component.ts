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
  joinedProgramFees: any[];
  subcourses: any;
  
  constructor(private service: CounterService, private formBuilder: FormBuilder) {
    this.ProgramFeesFormData = this.formBuilder.group({
      pro_max_id:8,
      course_id:['', Validators.required],
      sub_course_id:['', Validators.required],
      job_assistance:['', Validators.required],
      live_class_subscription:['', Validators.required],
      lms_subscription:['', Validators.required],
      job_referrals:['', Validators.required],
      industry_projects:['', Validators.required],
      capstone_projects:['', Validators.required],
      domain_training:['', Validators.required],
      project_certification_from_companies:['', Validators.required],
      adv_ai_dsa:['', Validators.required],
      microsoft_certification:['', Validators.required],
      sub_course_fee:100,
      sub_course_duration:3
      // sub_course_duration:
    });
  }




  ngOnInit(): void {
    this.getProgramFeesData()
    this.getCourse();
    this.getsubcourse();
    
  }
  getCourse() {
    this.service.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data;
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
    this.service.getProgramFees().subscribe((res: any) => {
      this.ProgramFeesData = res;
      console.log(res);
      
      this.joinTables();
    });
  }

  joinTables() {
    if (
      this.courseDetails.length > 0 &&
      this.subcourses.length > 0 &&
      this.ProgramFeesData.length > 0
    ) {
      this.joinedProgramFees = this.ProgramFeesData.map((programFee) => {
        
        const matchingCourse = this.courseDetails.find(course => course.course_id === programFee.course_id);
        const matchingSubcourse = this.subcourses.find(subcourse => subcourse.subcourses_id === programFee.sub_course_id);
        return {
          ...programFee,
          name: matchingCourse ? matchingCourse.name : 'Unknown Course',
          subcourses_name: matchingSubcourse ? matchingSubcourse.subcourses_name : 'Unknown Subcourse'
        };
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('pro_max_id', this.ProgramFeesFormData.value.pro_max_id);
    formData.append('course_id', this.ProgramFeesFormData.value.course_id);
    formData.append('sub_course_id', this.ProgramFeesFormData.value.sub_course_id);
    formData.append('job_assistance', this.ProgramFeesFormData.value.job_assistance);
    formData.append('live_class_subscription', this.ProgramFeesFormData.value.live_class_subscription);
    formData.append('lms_subscription', this.ProgramFeesFormData.value.lms_subscription);
    formData.append('job_referrals', this.ProgramFeesFormData.value.job_referrals);
    formData.append('industry_projects', this.ProgramFeesFormData.value.industry_projects);
    formData.append('capstone_projects', this.ProgramFeesFormData.value.capstone_projects);
    formData.append('domain_training', this.ProgramFeesFormData.value.domain_training);
    formData.append('project_certification_from_companies', this.ProgramFeesFormData.value.project_certification_from_companies);
    formData.append('adv_ai_dsa', this.ProgramFeesFormData.value.adv_ai_dsa);
    formData.append('microsoft_certification', this.ProgramFeesFormData.value.microsoft_certification);
    
    formData.append('sub_course_fee', this.ProgramFeesFormData.value.sub_course_fee);
    formData.append('sub_course_duration', this.ProgramFeesFormData.value.sub_course_duration);// const formValue = this.ProgramFeesFormData.value;

    // Object.keys(formValue).forEach(key => {
    //   formData.append(key, formValue[key]);
    // });

  

    this.service.addProgramFees(formData).subscribe(
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
