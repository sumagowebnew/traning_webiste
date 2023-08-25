import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-expert-review',
  templateUrl: './expert-review.component.html',
  styleUrls: ['./expert-review.component.css']
})
export class ExpertReviewComponent implements OnInit {
  expertform: any;
  base64Image: string;
  expert: any;
  expertlist: any;
  editForm1: any;
  editForm: any;

  constructor(private count: CounterService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addExpertForm();
    this.getExpertReviews();
    this.createEditForm();
  }

  addExpertForm(): void {
    this.expertform = this.formBuilder.group({
      review: ['', Validators.required],
      name: ['', Validators.required],
      company_position: ['', Validators.required],
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
    formData.append('review', this.expertform.value.review);
    formData.append('name', this.expertform.value.name);
    formData.append('company_position', this.expertform.value.company_position);
    formData.append('image', this.base64Image);

    this.count.addexpertreview(formData).subscribe(
      
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

  getExpertReviews(): void {
    this.count.getexpertreview().subscribe((res: any) => {
      console.log(res);
      this.expertlist = res;
    });
  }
  openEditModal(hire: any) {
    this.editForm.setValue({
      review: hire.review,
      name: hire.name,
      company_position:hire.company_position,
      selectedFile: null // Use the 'image' property from the hire object
    });
  }
  
  createEditForm() {
    this.editForm = this.formBuilder.group({
      review: ['', Validators.required],
      name: ['', Validators.required],
      company_position: ['', Validators.required],
      selectedFile: [null, Validators.required]
    });
  }
  // Function to handle the update operation in the edit modal
  updateHired(hire: any): void {
    const updatedData = this.editForm.value;
  
    const formData = new FormData();
    formData.append('review', updatedData.review);
    formData.append('name', updatedData.name);
    formData.append('company_position', updatedData.company_position);

    // formData.append('image', updatedData.selectedFile);
    if (updatedData.selectedFile) {
      formData.append('image', updatedData.selectedFile);
    } else {
      formData.append('image', this.base64Image);
    }
  
    this.count.updateExpert(hire.id, formData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        alert("Data Updated")
        // Optionally, update the local list with the updated hire data or fetch the updated list again
        this.getExpertReviews();
        location.reload();
      },
      (error) => {
        console.error('Failed to update hire data:', error);
      }
    );
  }

  deletereview(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.count.deleteexpert(id).subscribe(
        (response) => {
          console.log('Expert Review deleted:', response);
          alert('Expert Review Deleted')
          // You might want to refresh the categories list after deletion
          this.getExpertReviews();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }

  // Function to reset the form after successful submission
 
}
