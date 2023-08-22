import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-add-popular-course',
  templateUrl: './add-popular-course.component.html',
  styleUrls: ['./add-popular-course.component.css']
})
export class AddPopularCourseComponent implements OnInit {
  popularform: FormGroup;
  
  base64Image: string;
  popular: any;
  popularlist: any;

  constructor(
    private counter: CounterService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    // console.log(this.auth.getToken());
    
    this.popularCourse();
    this.getpopulardata();
   
  }

  popularCourse(): void {
    this.popularform = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      enrolled_students:['',Validators.required],
      info:['',Validators.required],
      selectedFile: [null, Validators.required]
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
    formData.append('name', this.popularform.value.name);
    formData.append('price', this.popularform.value.price);
    formData.append('enrolled_students', this.popularform.value.enrolled_students);
    formData.append('info', this.popularform.value.info);
    formData.append('image', this.base64Image);
   
    this.counter.addpopularcourse(formData).subscribe(
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
  getpopulardata(){
    this.counter.getpopularcourse().subscribe((res:any)=>{
      console.log(res);
      
      this.popularlist=res
      console.log(this.popularlist);

      
    })
  }
  deletepopularcourse(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.counter.deletepopular1(id).subscribe(
        (response) => {
          console.log('logo deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getpopulardata();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }



}
