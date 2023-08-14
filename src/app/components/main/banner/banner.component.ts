import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerForm: any;
  selectedFile: File | null = null;
  base64Image: string | null = null;
  ban: any;
  bannerlist: any;

  constructor(private banner:CounterService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.addbanner();
    this.getbanner();
    
  }

  addbanner(): void {
    this.bannerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      images: [null, Validators.required]
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.convertToBase64();
  }

  convertToBase64(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Image = reader.result as string;
      console.log(this.base64Image); 
    };
    reader.readAsDataURL(this.selectedFile);

  }

  onSubmit(): void {
   

    const formData = new FormData();
    formData.append('images', this.base64Image);
    formData.append('title', this.bannerForm.value.title);
    formData.append('description', this.bannerForm.value.description);
  

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
