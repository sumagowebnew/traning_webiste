import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-subcourse-details',
  templateUrl: './subcourse-details.component.html',
  styleUrls: ['./subcourse-details.component.css']
})
export class SubcourseDetailsComponent {
  
  subCourseDetails:FormGroup
subcourses
base64Image: string;
constructor(private service: CounterService, private formBuilder: FormBuilder){}
  
ngOnInit(): void {
  this.addSubcoursesDetails();
   this.getSubcoursesdetail();


   

   this.subCourseDetails = this.formBuilder.group({
    
    course_id: new FormControl('', Validators.required),
    title: ['', Validators.required],
    description: ['', Validators.required],
    custome_text:['',Validators.required],
    banner: [null, Validators.required]
  });
  }
getSubcoursesdetail(){
  this.service.getSubcoursesdetail().subscribe((res)=>{
    this.subcourses = res;
  })
}
deleteSubcourseDetails(id:number){
  this.service.deleteSubcoursedetail(id).subscribe((res)=>{
    alert('Success Deleting the Record')
  })
}
onFileSelected(event: any): void {
  const file = event.target.files[0];
  this.convertToBase64(file);
}

convertToBase64(file: File): void {
  const reader = new FileReader();
  reader.onload = () => {
    this.base64Image = reader.result as string;
  };
  reader.readAsDataURL(file);
}
addSubcoursesDetails(){
  
  const formData = new FormData();
  formData.append('title', this.subCourseDetails.value.title);
  formData.append('description', this.subCourseDetails.value.description);
  formData.append('custom_text', this.subCourseDetails.value.custom_text);
  formData.append('course_id', this.subCourseDetails.value.course_id);
  formData.append('banner', this.base64Image);
 
  this.service.addSubscoursesdetail(formData).subscribe((res)=>{
    alert('Added record Successfully')
  },
  (err)=>{
    alert(`Error Occured ${err}`)
  })
}

}
