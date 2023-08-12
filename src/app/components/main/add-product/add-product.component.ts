import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;
  editForm: any;

  constructor(private banner:CounterService,private formBuilder:FormBuilder ){}

  ngOnInit(){
    this.addproduct();
    this.getproduct();
  }
  addproduct(): void {
    this.bannerForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
     
    });
  }

 

  onSubmit(): void {
    const formData = new FormData();
    formData.append('title', this.bannerForm.value.title);
    formData.append('link', this.bannerForm.value.link);
    
   

    this.banner.addproduct(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.ban = response; // Not sure what this line is for, you might need to adjust it
      },
      (error) => {
        console.error('Failed to add data:', error);
      }
    );
  }

  getproduct(){
    this.banner.getproduct().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res;
    })
  }
  deleteProduct(id: number) {
    this.banner.deleteproduct(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getproduct();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }
  createEditForm() {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      
   
    });
  }
  
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      title: counter.title,
      link: counter.link,
     
    });
  }

  // Function to handle the update operation in the edit modal
  updateProduct(archive: any): void {
    const updatedData = this.editForm.value;
    this.banner.updateproduct(archive.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getproduct();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }

}
