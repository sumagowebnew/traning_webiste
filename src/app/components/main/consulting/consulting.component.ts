import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {
  consultform: any;
  consult: any;
  consultlist: any;
  editForm: any;

  constructor(private count:CounterService,private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.addconsulting();
    this.getconsult();
    this.createEditForm();
    
  }
  addconsulting(): void {
    this.consultform = this.formBuilder.group({
      fname:['',Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      contact:['',Validators.required],
      company_name: ['', Validators.required],
    });
  }

 
  onSubmit(): void {
   

    const formData = new FormData();
    formData.append('fname',this.consultform.value.fname),
    formData.append('lname', this.consultform.value.lname);
    formData.append('email', this.consultform.value.email);
    formData.append('contact', this.consultform.value.contact);
    formData.append('company_name', this.consultform.value.company_name);
    

    this.count.addconsulting(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.consult = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }
  getconsult(){
    this.count.getconsulting().subscribe((res:any)=>{
      console.log(res);
      
      this.consultlist=res.data;

    })
  }
  createEditForm() {
    this.editForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email:['', Validators.required],
      contact:['', Validators.required],
      company_name:['', Validators.required],
    });
  }
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(consult: any) {
    this.editForm.setValue({
      fname: consult.fname,
      lname: consult.lname,
      email: consult.email,
      contact: consult.contact,
      company_name: consult.company_name,
     
    });
  }

  // Function to handle the update operation in the edit modal
  updateconsult(archive: any): void {
    const updatedData = this.editForm.value;
    this.count.updateconsulting(archive.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getconsult();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }

  deleteconsulting(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.count.deleteconsulting(id).subscribe(
        (response) => {
          console.log('Consulting deleted:', response);
          alert(`Consulting Deleted:${response}`)
          // You might want to refresh the categories list after deletion
          this.getconsult();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
}
