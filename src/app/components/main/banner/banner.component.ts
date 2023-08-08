import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewWebService } from 'src/app/services/new-web.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;

  constructor(private banner:NewWebService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.addbanner();
    this.getbanner();
    
  }

  addbanner(): void {
    this.bannerForm = this.formBuilder.group({
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
    formData.append('title', this.bannerForm.value.title);
    formData.append('description', this.bannerForm.value.description);
    formData.append('images', this.base64Image);

    this.banner.addbanner(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.ban = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  getbanner(){
    this.banner.getbanner().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res;
    })
  }
  deletebanner(id: number) {
    this.banner.deletebanner(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getbanner();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }
}
