import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  expertform: any;
  base64Image: string;
  expert: any;
  expertlist: any;
  editForm1: any;

  constructor(private count: CounterService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addExpertForm();
    this.getExpertReviews();
    this.createEditForm();
  }

  addExpertForm(): void {
    this.expertform = this.formBuilder.group({
     
      title: ['', Validators.required],
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
    
    formData.append('title', this.expertform.value.title);
    formData.append('icon', this.base64Image);

    this.count.addhigh(formData).subscribe(
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
    this.count.gethigh().subscribe((res: any) => {
      console.log(res);
      this.expertlist = res;
    });
  }

  createEditForm() {
    this.editForm1 = this.formBuilder.group({
      
      title: ['', Validators.required],
      selectedFile: [null, Validators.required]
    });
  }

  // Function to open the edit modal and populate form fields with the selected expert review data
  openEditModal(expert: any) {
    this.editForm1.setValue({
     
      title: expert.company_position,
      selectedFile: expert.base64Image
    });
  }

  // Function to handle the update operation in the edit modal
  updateexpert(expert: any): void {
    const updatedData = this.editForm1.value;
    this.count.updatehigh(expert.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated expert review or fetch the updated list again
        this.getExpertReviews();
      },
      (error) => {
        console.error('Failed to update expert review data:', error);
      }
    );
  }

  deletereview(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.count.deletehigh(id).subscribe(
        (response) => {
          console.log('Project deleted:', response);
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
  reset() {
    this.expertform.reset();
    this.base64Image = '';
  }

}
