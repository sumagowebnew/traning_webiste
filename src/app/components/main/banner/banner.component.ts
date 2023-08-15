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
<<<<<<< HEAD
  selectedFile: File | null = null;
  base64Image: string | null = null;
=======
  base64Images: string[] = []; // Initialize the array with string type
>>>>>>> 76ca88fa8432c418c88dbaf535017cb4efcbf07f
  ban: any;
  bannerlist: any;

  constructor(private banner: CounterService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addbanner();
    this.getbanner();
  }

  addbanner(): void {
    this.bannerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
<<<<<<< HEAD
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
=======
      selectedFiles: [null, Validators.required] // Use selectedFiles for multiple files
    });
  }

  onFilesSelected(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.convertToBase64(files[i], i);
    }
  }

  convertToBase64(file: File, index: number): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Images[index] = reader.result as string;
>>>>>>> 76ca88fa8432c418c88dbaf535017cb4efcbf07f
    };
    reader.readAsDataURL(this.selectedFile);

  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('images', this.base64Image);
    formData.append('title', this.bannerForm.value.title);
    formData.append('description', this.bannerForm.value.description);
<<<<<<< HEAD
  
=======
    
    // Append all images
    for (const image of this.base64Images) {
      formData.append('images[]', image);
    }
>>>>>>> 76ca88fa8432c418c88dbaf535017cb4efcbf07f

    this.banner.addbanner(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.ban = response;
        this.clearForm(); // Optionally, clear the form after submission
      },
      (error) => {
        console.error('Failed to add banner:', error);
      }
    );
  }

  getbanner() {
    this.banner.getbanner().subscribe((res: any) => {
      this.bannerlist = res;
      console.log(this.bannerlist, 'Banner list retrieved');
    });
  }

  deletebanner(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.banner.deletebanner(id).subscribe(
        (response) => {
          console.log('Banner deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getbanner();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }

  clearForm() {
    // Reset the form and image data after submission
    this.bannerForm.reset();
    this.base64Images = [];
  }
}
