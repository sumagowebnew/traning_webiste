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
  courseDetails: any;

  constructor(private banner: CounterService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addSubCourse();
    this.getSubCourse();
    this.getCourse();
  }
  addSubCourse(): void {
    this.bannerForm = this.formBuilder.group({
      course_id: ['', Validators.required],
      name: ['', Validators.required],
      selectedFile: [null, Validators.required]

    });
  }

  getCourse() {
    this.banner.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });


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

  onSubmit(): void {
    const formData = new FormData();
    formData.append('course_id', this.bannerForm.value.course_id);
    formData.append('name', this.bannerForm.value.name);
    formData.append('image', this.base64Image);



    this.banner.addsubcourse(formData).subscribe(
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

  getSubCourse() {
    this.banner.getsubcourse().subscribe((res: any) => {
      console.log(res);
      this.bannerlist = res.data;
    })
  }
  deleteSubCourse(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.banner.deletesubcourse(id).subscribe(
        (response) => {
          console.log('logo deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getSubCourse();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }

}
