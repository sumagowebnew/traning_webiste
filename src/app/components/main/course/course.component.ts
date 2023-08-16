import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;
  constructor(private company: CounterService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addcompany();
    this.getcompany();


  }

  addcompany(): void {
    this.bannerForm = this.formBuilder.group({

      name: ['', Validators.required],

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

    formData.append('name', this.bannerForm.value.name);


    this.company.addcourse(formData).subscribe(
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

  getcompany() {
    this.company.getcourse().subscribe((res: any) => {
      console.log(res);
      this.bannerlist = res.data;
    })
  }
  deletecompany(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.company.deletecourse(id).subscribe(
        (response) => {
          console.log('Course deleted:', response);
          alert(`Course Deleted:${response}`)
          // You might want to refresh the categories list after deletion
          this.getcompany();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }


}
