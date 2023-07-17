import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewWebService } from 'src/app/services/new-web.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent  implements OnInit{
  base64Image: string;
  hired: any;
  hirelist: any;

  constructor(private newweb:NewWebService,private formBuilder:FormBuilder){}
  hireform: any;



  ngOnInit(): void {
    this.addhired();
    this.gethired();
    
  }
  addhired(): void {
    this.hireform = this.formBuilder.group({
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
    formData.append('title', this.hireform.value.title);
    formData.append('description', this.hireform.value.description);
    formData.append('image', this.base64Image);

    this.newweb.addhire(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.hired = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  gethired(){
    this.newweb.gethire().subscribe((res:any)=>{
      console.log(res);
      this.hirelist=res;
    })
  }
}


