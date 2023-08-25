import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;
  editForm: any;

  constructor(private company:CounterService,private formBuilder:FormBuilder ){}
  
  ngOnInit(): void {
    this.addcompany();
    this.getcompany();
    this.createEditForm();
    
  }

  addcompany(): void {
    this.bannerForm = this.formBuilder.group({
      mobile_no: ['', Validators.required],
      address: ['', Validators.required],
      email_id: ['', Validators.required],
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
    formData.append('mobile_no', this.bannerForm.value.mobile_no);
    formData.append('address',this.bannerForm.value.address);
    formData.append('email_id', this.bannerForm.value.email_id);
    formData.append('image', this.base64Image);

    this.company.addCompany(formData).subscribe(
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

  getcompany(){
    this.company.getCompany().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res;
    })
  }
  deletecompany(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.company.deleteCompany(id).subscribe(
        (response) => {
          console.log('Company deleted:', response);
          alert(`Company Deleted`)
          // You might want to refresh the categories list after deletion
          this.getcompany();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
  createEditForm() {
    this.editForm = this.formBuilder.group({
      mobile_no: ['', Validators.required],
      address: ['', Validators.required],
      email_id: ['', Validators.required],
      selectedFile: [null, Validators.required]
    });
  }
  
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      mobile_no: counter.mobile_no,
      address: counter.address,
      email_id:counter.email_id,
      selectedFile:null
    });
  }

  // Function to handle the update operation in the edit modal
  updatecompany(archive: any): void {
    const updatedData = this.editForm.value;
    
    const formData = new FormData();
    formData.append('mobile_no', updatedData.mobile_no);
    formData.append('address', updatedData.address);
    formData.append('email_id', updatedData.email_id);
    // formData.append('image', updatedData.selectedFile);
    if (updatedData.selectedFile) {
      formData.append('image', updatedData.selectedFile);
    } else {
      formData.append('image', this.base64Image);
    }
    this.company.updateCompany(archive.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        alert("Data Updated")
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getcompany();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }


}
