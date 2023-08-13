import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-certicate',
  templateUrl: './certicate.component.html',
  styleUrls: ['./certicate.component.css']
})
export class CerticateComponent implements OnInit{
  certificate: any;
  base64Image: string;
  certificatelist: any;
  courseDetails: any;


  constructor( private counter:CounterService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.addcerticate();
    this.getcertificate();
    this.getCourse();
    
  }

  getCourse(){
    this.counter.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });

  }

  addcerticate(): void {
    this.certificate = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
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
    formData.append('title', this.certificate.value.title);
    formData.append('description',this.certificate.value.description),
    formData.append('image', this.base64Image);

    this.counter.addcertificate(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.certificate = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }
  getcertificate(){
    this.counter.getcertificate().subscribe((res:any)=>{
      console.log(res);
      
      this.certificatelist=res;

    })
  }
  deletecertificate(id: number) {
    this.counter.deletecertificate(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getcertificate();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }

}
