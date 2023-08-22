import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-add-ouroffice',
  templateUrl: './add-ouroffice.component.html',
  styleUrls: ['./add-ouroffice.component.css']
})
export class AddOurofficeComponent implements OnInit {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;
  editForm: any;

  constructor(private banner:CounterService,private formBuilder:FormBuilder ){}

  ngOnInit(){
    this.addOffice();
    this.getoffice();
    this.createEditForm();
  }
  addOffice(): void {
    this.bannerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required],
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
    formData.append('link', this.bannerForm.value.link);
    formData.append('image', this.base64Image);

    this.banner.addoffice(formData).subscribe(
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

  getoffice(){
    this.banner.getoffice().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res;
    })
  }
  deleteoffice(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.banner.deleteoffice(id).subscribe(
        (response) => {
          console.log('logo deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getoffice();
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
      link:['',Validators.required],
      selectedFile: [null, Validators.required]
    });
  }
  
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      title: counter.title,
      description: counter.description,
      link:counter.link,
      selectedFile:null
    });
  }

  // Function to handle the update operation in the edit modal
  updateoffice(archive: any): void {
    const updatedData = this.editForm.value;
    
    const formData = new FormData();
    formData.append('title', updatedData.title);
    formData.append('description', updatedData.description);
    formData.append('link', updatedData.link);
    // formData.append('image', updatedData.selectedFile);
    if (updatedData.selectedFile) {
      formData.append('image', updatedData.selectedFile);
    } else {
      formData.append('image', this.base64Image);
    }
    this.banner.updateoffice(archive.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getoffice();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }
}
