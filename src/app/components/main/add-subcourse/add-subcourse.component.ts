import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-add-subcourse',
  templateUrl: './add-subcourse.component.html',
  styleUrls: ['./add-subcourse.component.css']
})
export class AddSubcourseComponent {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;
  editForm: any;

  constructor(private banner:CounterService,private formBuilder:FormBuilder ){}

  ngOnInit(){
    this.addSubCourse();
    this.getSubCourse();
  }
  addSubCourse(): void {
    this.bannerForm = this.formBuilder.group({
      course_id: ['', Validators.required],
      name: ['', Validators.required],
     
    });
  }

 

  onSubmit(): void {
    const formData = new FormData();
    formData.append('course_id', this.bannerForm.value.course_id);
    formData.append('name', this.bannerForm.value.name);
    
   

    this.banner.addsubcourse(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.ban = response; // Not sure what this line is for, you might need to adjust it
      },
      (error) => {
        console.error('Failed to add data:', error);
      }
    );
  }

  getSubCourse(){
    this.banner.getsubcourse().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res;
    })
  }
  deleteSubCourse(id: number) {
    this.banner.deletesubcourse(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getSubCourse();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }

}
