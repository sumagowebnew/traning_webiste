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
  constructor(private company:CounterService,private formBuilder:FormBuilder ){}
  
  ngOnInit(): void {
    this.addcompany();
    this.getcompany();
    
    
  }

  addcompany(): void {
    this.bannerForm = this.formBuilder.group({
      review: ['', Validators.required],
      name: ['', Validators.required],
      company_position: ['', Validators.required],
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
    formData.append('review', this.bannerForm.value.review);
    formData.append('name',this.bannerForm.value.name);
    formData.append('company_position', this.bannerForm.value.company_position);
    formData.append('images', this.base64Image);

    this.company.addcourse(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.ban = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  getcompany(){
    this.company.getcourse().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res.data;
    })
  }
  deletecompany(id: number) {
    this.company.deletecontact(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getcompany();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }


}
