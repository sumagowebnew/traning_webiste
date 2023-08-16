import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-program-city',
  templateUrl: './program-city.component.html',
  styleUrls: ['./program-city.component.css']
})
export class ProgramCityComponent implements OnInit{
  counterForm: any;
  counter: any;
  counterlist: any;
  editForm: any;
  constructor(private about:CounterService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.createCounterForm();
    this.getcounterdata();
    this.createEditForm();
  }

  createCounterForm() {
    this.counterForm = this.fb.group({
      name: ['', Validators.required],
      
    });

  }
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.counterForm.value.name);
   ;
   
    // Call your CourseService method to upload the course with the formData
    this.about.addcity(formData).subscribe(
    (response: any)=>{
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

    getcounterdata(){
      this.about.getcity().subscribe((res:any)=>{
        this.counterlist=res.data;
        console.log(this.counterlist);
        
      })
    }
    deletecounter(id: number) {
      const confirmation = confirm('Are you sure you want to delete this category?');
      if (confirmation) {
        this.about.deletecity(id).subscribe(
          (response) => {
            console.log('Project deleted:', response);
            // You might want to refresh the categories list after deletion
            this.getcounterdata();
          },
          (error) => {
            console.error('Error deleting Project:', error);
          }
        );
      }
    }
    createEditForm() {
      this.editForm = this.fb.group({
        name: ['', Validators.required],
        
      });
    }
    // Function to open the edit modal and populate form fields with the selected counter data
    openEditModal(consult: any) {
      this.editForm.setValue({
        name: consult.name,
      
       
      });
    }
  
    // Function to handle the update operation in the edit modal
    updatecounter(about: any): void {
      const updatedData = this.editForm.value;
      this.about.updatecity(about.id, updatedData).subscribe(
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
