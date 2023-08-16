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

  getproduct(){
    this.banner.getproduct().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res;
    })
  }
  deleteProduct(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.banner.deleteproduct(id).subscribe(
        (response) => {
          console.log('Product deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getproduct();
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
