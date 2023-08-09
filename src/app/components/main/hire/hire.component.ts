import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewWebService } from 'src/app/services/new-web.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent  implements OnInit{
  base64Image: string;
  hired: any;
  hirelist: any;
  editForm:any;

  constructor(private newweb:NewWebService,private formBuilder:FormBuilder){}
  hireform: any;



  ngOnInit(): void {
    this.addhired();
    this.gethired();
    
  }
  addhired(): void {
    this.hireform = this.formBuilder.group({
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
    formData.append('title', this.hireform.value.title);
    formData.append('description', this.hireform.value.description);
    formData.append('image', this.base64Image);

    this.newweb.addhire(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.hired = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  gethired(){
    this.newweb.gethire().subscribe((res:any)=>{
      console.log(res);
      this.hirelist=res;
    })
  }
  deletehired(id: number) {
    this.newweb.deletehire(id).subscribe(
      () => {
        console.log('Archievement deleted successfully');
        // Optionally, update the local list by removing the deleted counter or fetch the updated list again
        this.gethired();
      },
      (error) => {
        console.error('Failed to delete archivement:', error);
      }
    );
  }
  createEditForm() {
    this.editForm = this.formBuilder.group({
      title:['',Validators.required],
      
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
  updatehired(hire: any): void {
    const updatedData = this.editForm.value;
    this.newweb.updatehire(hire.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.gethired();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }

}


