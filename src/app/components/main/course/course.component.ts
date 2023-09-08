import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  bannerForm: any;
  base64Image: string;
  ban: any;
  selectedImage: any;  
  bannerlist: any;
  editForm: any;
  constructor(private company: CounterService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addcompany();
    this.getcompany();
    this.createEditForm();


  }

  addcompany(): void {
    this.bannerForm = this.formBuilder.group({

      name: ['', Validators.required],
      image: [null, Validators.required]
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
      console.log(this.base64Image);
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {


    const formData = new FormData();

    formData.append('name', this.bannerForm.value.name);
    formData.append('image', this.base64Image);


    this.company.addcourse(formData).subscribe(
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

  getcompany() {
    this.company.getcourse().subscribe((res: any) => {
      console.log(res);
      this.bannerlist = res.data;
    })
  }
  deletecompany(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.company.deletecourse(id).subscribe(
        (response) => {
          console.log('Course deleted:', response);
          alert(`Course Deleted`)
          // You might want to refresh the categories list after deletion
          this.getcompany();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
  createEditForm() {
    this.editForm = this.formBuilder.group({
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
  updatecounter(about:number): void {
    const updatedData = this.editForm.value;
    
      const formData = new FormData();
      formData.append('name', updatedData.name);
      formData.append('image', this.base64Image);
    this.company.updatecourse(about, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        alert("Data Updated")
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getcompany();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }




}
