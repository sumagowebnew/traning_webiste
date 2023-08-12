import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'app-brochuer',
  templateUrl: './brochuer.component.html',
  styleUrls: ['./brochuer.component.css']
})
export class BrochuerComponent implements OnInit{
  broucherform: any;
  broucher: any;
  broucherlist: any;
  editForm: any;

  constructor(private our:CounterService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.addbroucher();
    this.getbroucher();
    this.createEditForm();
    
  }

  addbroucher(): void {
    this.broucherform = this.formBuilder.group({
      name:['',Validators.required],
      
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

 
  onSubmit(): void {
   

    const formData = new FormData();
    formData.append('name',this.broucherform.value.name),
  
    formData.append('email', this.broucherform.value.email);
    formData.append('contact', this.broucherform.value.contact);
    

    this.our.addbroucher(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.broucher = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }
  getbroucher(){
    this.our.getbroucher().subscribe((res:any)=>{
      console.log(res.data);
      
      this.broucherlist=res.data;

    })
  }
  deletebrochuer(id: number) {
    this.our.deletebroucher(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getbroucher();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }
  createEditForm() {
    this.editForm = this.formBuilder.group({
      name:['',Validators.required],
      
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }
  
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      name: counter.name,
      email: counter.email,
      contact:counter.contact
    });
  }

  // Function to handle the update operation in the edit modal
  updatebrocher(archive: any): void {
    const updatedData = this.editForm.value;
    this.our.updatebrochuer(archive.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getbroucher();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }

}
