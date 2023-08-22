import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-google-review',
  templateUrl: './google-review.component.html',
  styleUrls: ['./google-review.component.css']
})
export class GoogleReviewComponent implements OnInit {
  googleForm: any;
  base64Image: string;
  googlereview: any;
  editForm1: any;

  constructor(private about: CounterService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.addgoogle();
    this.getgoogle();
    this.createEditForm();
  }


  addgoogle(): void {
    this.googleForm = this.formBuilder.group({

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

    formData.append('image', this.base64Image);

    this.about.addgooglereview(formData).subscribe(
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
  getgoogle() {
    this.about.getgooglereview().subscribe((res: any) => {
      console.log(res);

      this.googlereview = res;

    })
  }
  deletegoogle(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.about.deletebgooglereview(id).subscribe(
        (response) => {
          console.log('Google Review deleted:', response);
          alert(`Google Review Deleted:${response}`)
          // You might want to refresh the categories list after deletion
          this.getgoogle();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
  createEditForm() {
    this.editForm1 = this.formBuilder.group({

      selectedFile: [null, Validators.required]
    });
  }

  // Function to open the edit modal and populate form fields with the selected expert review data
  openEditModal(expert: any) {
    this.editForm1.setValue({

      selectedFile: expert.base64Image
    });
  }

  // Function to handle the update operation in the edit modal
  updategooglereview(google: any): void {
    const updatedData = this.editForm1.value;
    this.about.updategooglereview(google.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated expert review or fetch the updated list again
        this.getgoogle();
      },
      (error) => {
        console.error('Failed to update expert review data:', error);
      }
    );
  }
}
