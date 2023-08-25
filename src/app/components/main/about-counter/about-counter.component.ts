import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CounterService } from 'src/app/services/counter.service';

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

  constructor(private about: CounterService, private fb: FormBuilder) { }


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
      (response: any) => {
        if (response.StatusCode == '200') {
          // this.router.navigate(['/main/banner'])
          alert("Data added successfully");
          location.reload();

        } else {
          alert("Something went wrong");
        }

      },
      (error) => console.error('failed to add course')
    );
  }

  getcounterdata() {
    this.about.getaboutcounter().subscribe((res: any) => {
      this.counterlist = res.data;
      console.log(this.counterlist);

    })
  }
  deletecounter(id: number) {
    //   this.about.deletecounter(id).subscribe(
    //     () => {
    //       console.log('Counter deleted successfully');
    //       // Optionally, update the local list by removing the deleted counter or fetch the updated list again
    //       this.getcounterdata();
    //     },
    //     (error) => {
    //       console.error('Failed to delete counter:', error);
    //     }
    //   );
    // }
    const confirmDelete = confirm('Are you sure you want to delete this record?');

    if (confirmDelete) {
      this.about.deletecounter(id).subscribe(
        () => {
          console.log('Data deleted successfully');
          // You can also refresh the data or perform other actions here
          this.getcounterdata();
        },
        error => {
          console.error('Failed to delete data:', error);
        }
      );
    }
  }
  createEditForm() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required]
    });
  }
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(consult: any) {
    this.editForm.setValue({
      name: consult.name,
      count: consult.count

    });
  }

  // Function to handle the update operation in the edit modal
  updatecounter(about: any): void {
    const updatedData = this.editForm.value;
    this.about.updateabout(about.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        alert("Data updated successfully");
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getcounterdata();

      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }

}
