import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-archievement',
  templateUrl: './archievement.component.html',
  styleUrls: ['./archievement.component.css']
})
export class ArchievementComponent implements OnInit {
  counterlist: any[];
  counterForm: FormGroup;
  editForm: FormGroup; // Add a new FormGroup for the edit modal

  constructor(private counter: CounterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createCounterForm();
    this.getcounterdata();
    this.createEditForm(); // Call the function to create the edit modal form
  }

  createCounterForm() {
    this.counterForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
    });
  }



  onSubmit() {
    // Submit the form data to add a new counter
    this.counter.addcounter(this.counterForm.value).subscribe(
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

  getcounterdata() {
    this.counter.getcounter().subscribe((res: any) => {
      this.counterlist = res.data;
      console.log(this.counterlist);
    });
  }


  createEditForm() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
    });
  }
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      name: counter.name,
      count: counter.count,
    });
  }

  // Function to handle the update operation in the edit modal
  updateArchive(archive: any): void {
    const updatedData = this.editForm.value;
    this.counter.updateArchivement(archive.id, updatedData).subscribe(
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

  deletearchived(id: number) {
   const confirmation = confirm('Are you sure you want to delete this category?');
  if (confirmation) {
    this.counter.deletearchivement(id).subscribe(
      (response) => {
        console.log(' Home Counter deleted:', response);
        // You might want to refresh the categories list after deletion
        this.getcounterdata();
      },
      (error) => {
        console.error('Error deleting Project:', error);
      }
    );
  }
}
}
