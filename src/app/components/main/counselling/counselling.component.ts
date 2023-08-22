import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.css']
})
export class CounsellingComponent implements OnInit {
  bannerForm: any;
  base64Image: string;
  ban: any;
  bannerlist: any;
  editForm: any;

  constructor(private banner:CounterService,private formBuilder:FormBuilder ){}

  ngOnInit(){
    this.addOffice();
    this.getoffice();
  }
  addOffice(): void {
    this.bannerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      course:['', Validators.required],
      duration:['', Validators.required],
      interest:['', Validators.required],
     
    });
  }

 

  onSubmit(): void {
    const formData = new FormData();
    formData.append('fullname', this.bannerForm.value.fullname);
    formData.append('email', this.bannerForm.value.email);
    formData.append('contact', this.bannerForm.value.contact);
    formData.append('course', this.bannerForm.value.course);
    formData.append('duration', this.bannerForm.value.duration);
    formData.append('interest', this.bannerForm.value.interest);
    
    

    this.banner.addcouns(formData).subscribe(
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
    this.banner.getcouns().subscribe((res:any)=>{
      console.log(res);
      this.bannerlist=res.data;
    })
  }
  deleteoffice(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.banner.deletecouns(id).subscribe(
        (response) => {
          console.log('Counselling deleted:');
          alert(`Counselling Deleted`)
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
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      course:['', Validators.required],
      duration:['', Validators.required],
      interest:['', Validators.required],
    });
  }
  
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      fullname: counter.fullname,
      email: counter.email,
      contact:counter.contact,
      course:counter.course,
      duration:counter.duration,
      interest:counter.interest,
    });
  }

  // Function to handle the update operation in the edit modal
  updateoffice(archive: any): void {
    const updatedData = this.editForm.value;
    this.banner.updatecouns(archive.id, updatedData).subscribe(
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
