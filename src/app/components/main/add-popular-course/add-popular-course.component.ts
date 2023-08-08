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
        console.log('Data  successfully:', response);
        this.popular = response;
        this.auth
        
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
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
    this.counter.deletepopular(id)
      .subscribe(
        () => {
          console.log('Popular Course deleted successfully');
          window.location.reload();
          // Perform any additional actions or display success message
        },
        (error) => {
          console.error('Failed to delete course', error);
          // Handle error, display error message, or perform alternative actions
        }
      );
  }



}
