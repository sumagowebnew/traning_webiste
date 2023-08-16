import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-add-logo',
  templateUrl: './add-logo.component.html',
  styleUrls: ['./add-logo.component.css']
})
export class AddLogoComponent {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;
  editForm: any;

  constructor(private banner:CounterService,private formBuilder:FormBuilder ){}

  ngOnInit(){
    this.addLogo();
    this.getLogo();
  }
  addLogo(): void {
 

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
    
    formData.append('image', this.base64Image);

    this.banner.addlogo(formData).subscribe(
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

  getLogo(){
    this.banner.getlogo().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res;
    })
  }
  deleteLogo(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.banner.deletelogo(id).subscribe(
        (response) => {
          console.log('logo deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getLogo();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
    
  createEditForm() {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      
      selectedFile: [null, Validators.required]
    });
  }
  
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      title: counter.title,
      description: counter.description,
     
      selectedFile:counter.base64Image
    });
  }

  // Function to handle the update operation in the edit modal
  updateLogo(archive: any): void {
    const updatedData = this.editForm.value;
    this.banner.updatelogo(archive.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getLogo();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }

}
