import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-course-highlight',
  templateUrl: './course-highlight.component.html',
  styleUrls: ['./course-highlight.component.css']
})
export class CourseHighlightComponent implements OnInit {
  subCourseDetails:FormGroup
subcourses
base64Image: string;
  courseDetails: any;
constructor(private service: CounterService, private formBuilder: FormBuilder){}
  
ngOnInit(): void {
  this.addSubcoursesDetails();
   this.getSubcoursesdetail();
   this.getCourse();


   

   this.subCourseDetails = this.formBuilder.group({
    
    course_id: new FormControl('', Validators.required),
    highlights: ['', Validators.required],
   
  });
  }

  getCourse(){
    this.service.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });

  }
  
getSubcoursesdetail(){
  this.service.getcoursehigh().subscribe((res)=>{
    this.subcourses = res;
  })
}



deleteSubcourseDetails(id:number){
  this.service.deletecoursehigh(id).subscribe((res)=>{
    alert('Success Deleting the Record')
  })
}

addSubcoursesDetails(){
  
  const formData = new FormData();
 
  formData.append('course_id', this.subCourseDetails.value.course_id);
  formData.append('highlights', this.subCourseDetails.value.highlights);
 
  this.service.addcoursehigh(formData).subscribe((res)=>{
    alert('Added record Successfully')
  },
  (err)=>{
    alert(`Error Occured ${err}`)
  })
}


}
