import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-google-review',
  templateUrl: './google-review.component.html',
  styleUrls: ['./google-review.component.css']
})
export class GoogleReviewComponent implements OnInit {
  googleForm: any;
  base64Image: string;
  googlereview: any;
 
  constructor(private about:AboutService,private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.addgoogle();
    this.getgoogle();
  }


  addgoogle(): void {
    this.googleForm = this.formBuilder.group({
     
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
   
    formData.append('image', this.base64Image);

    this.about.addgooglereview(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.googlereview = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }
  getgoogle(){
    this.about.getgooglereview().subscribe((res:any)=>{
      console.log(res);
      
      this.googlereview=res;

    })
  }
  deletegoogle(id: number) {
    this.about.deletebgooglereview(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getgoogle();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }

}
