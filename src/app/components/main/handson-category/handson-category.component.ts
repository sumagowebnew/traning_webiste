import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-handson-category',
  templateUrl: './handson-category.component.html',
  styleUrls: ['./handson-category.component.css']
})
export class HandsonCategoryComponent implements OnInit {

  handsonCategory: FormGroup;
  handsonCategoryDetails: any[]
  handsonCategoryUpdateForm: FormGroup; // Add this form for update
  bannerlist: any;
  handson: any;
  certificate: any;
  editForm: any;


  ngOnInit(): void {
    this.getCategories()
    this.addcompany();
    this.createEditForm()
  }
  constructor(private service: CounterService, private fb: FormBuilder) {
  

  }





 
  addcompany(): void {
    this.certificate = this.fb.group({
     
      title: ['', Validators.required]
    
    });
  }


  onSubmit(): void {
   

    const formData = new FormData();
    // formData.append('course_id',this.certificate.value.course_id);
    formData.append('title', this.certificate.value.title);
  

    this.service.addHandosnCategory(formData).subscribe(
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
  // getcompany() {
  //   this.service.getHandsonCategory().subscribe((res: any) => {
  //     console.log(res);
  //     this.bannerlist = res.data;
  //   })
  // }
  getCategories() {
    this.service.getHandsonCategory().subscribe(
      (response: any) => {
        this.bannerlist = response.data;
        console.log(this.bannerlist)
      },
      (error) => {
        console.error('Error getting categories:', error);
      }
    );
  }

  deleteCategory(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.service.deleteHandsonCategory(id).subscribe(
        (response) => {
          console.log('Category deleted:', response);
          alert('Data Deleted')
          // You might want to refresh the categories list after deletion
          this.getCategories();
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
  createEditForm() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      
    });
  }
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(about: any) {
    this.editForm.setValue({
      title: about.title,
    
     
    });
  }

  // Function to handle the update operation in the edit modal
  updatecounter(about: any): void {
    const updatedData = this.editForm.value;
    
      const formData = new FormData();
      formData.append('title', updatedData.title);
      this.service.updateHandsonCategory(about.id, updatedData).subscribe(
        (response) => {
          console.log('Category updated:', response);
          alert("Data Updated")
          this.getCategories(); // Refresh the category list after successful update
        },
        (error) => {
          console.error('Error updating category:', error);
        }
      );
    }
  }


