import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-counter',
  templateUrl: './about-counter.component.html',
  styleUrls: ['./about-counter.component.css']
})
export class AboutCounterComponent implements OnInit {

  
  aboutcount: any;
  counterlist: any;
  counterForm: any;
  counter: any;
  editForm: any;

  constructor(private about:AboutService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.createCounterForm();
    this.getcounterdata();
    this.createEditForm();
  }

  createCounterForm() {
    this.counterForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
    });

  }
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.counterForm.value.name);
    formData.append('count', this.counterForm.value.count);
   
    // Call your CourseService method to upload the course with the formData
    this.about.addaboutcounter(formData).subscribe(
    (response: any)=>{
      console.log('Created Successfully:', response);
            this.counter = response;    
            
          },
          (error)=>console.error('failed to add course')
        );
    }

    getcounterdata(){
      this.about.getaboutcounter().subscribe((res:any)=>{
        this.counterlist=res.data;
        console.log(this.counterlist);
        
      })
    }
    deletecounter(id: number) {
      this.about.deletecounter(id).subscribe(
        () => {
          console.log('Counter deleted successfully');
          // Optionally, update the local list by removing the deleted counter or fetch the updated list again
          this.getcounterdata();
        },
        (error) => {
          console.error('Failed to delete counter:', error);
        }
      );
    }
    createEditForm() {
      this.editForm = this.fb.group({
        name: ['', Validators.required],
        count:['',Validators.required]
      });
    }
    // Function to open the edit modal and populate form fields with the selected counter data
    openEditModal(consult: any) {
      this.editForm.setValue({
        name: consult.name,
       count:consult.count
       
      });
    }
  
    // Function to handle the update operation in the edit modal
    updatecounter(about: any): void {
      const updatedData = this.editForm.value;
      this.about.updateabout(about.id, updatedData).subscribe(
        (res: any) => {
          console.log('Data updated successfully:', res);
          // Optionally, update the local list with the updated counter or fetch the updated list again
          this.getcounterdata();
        },
        (error) => {
          console.error('Failed to update archivement data:', error);
        }
      );
    }

}
