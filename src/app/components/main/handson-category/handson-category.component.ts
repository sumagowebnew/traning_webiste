import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-handson-category',
  templateUrl: './handson-category.component.html',
  styleUrls: ['./handson-category.component.css']
})
export class HandsonCategoryComponent implements OnInit {
  handsonCategory:FormGroup;
  handsonCategoryDetails:any[]
  handsonCategoryUpdateForm: FormGroup; // Add this form for update
  

  ngOnInit(): void {
    this.getCategories()
  }
  constructor(private service:CounterService, private fb:FormBuilder){
    this.handsonCategory = this.fb.group({
      title: [''],
    });
        // Initialize the update form
        this.handsonCategoryUpdateForm = this.fb.group({
          title: [''],
        });
    
  }

  openUpdateModal(category: any): void {
    this.handsonCategoryUpdateForm.patchValue({ title: category.title });
  }



  getCategories() {
    this.service.getHandsonCategory().subscribe(
      (response) => {
        this.handsonCategoryDetails = response;
        console.log('Categories retrieved:', response);
      },
      (error) => {
        console.error('Error getting categories:', error);
      }
    );
  }

  addCategory() {
    if (this.handsonCategory.valid) {
      const data = { title: this.handsonCategory.value.title };
      this.service.addHandosnCategory(data).subscribe(
        (response) => {
          console.log('Category added:', response);
          this.handsonCategory.reset();
        },
        (error) => {
          console.error('Error adding category:', error);
        }
      );
    }
  }

  deleteCategory(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.service.deleteHandsonCategory(id).subscribe(
        (response) => {
          console.log('Category deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getCategories();
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
  updateCategory(id:number) {
    if (this.handsonCategoryUpdateForm.valid) {
      const updatedTitle = this.handsonCategoryUpdateForm.value.title;  
      const updateData = { title: updatedTitle }; // Construct the data object for update
      
      this.service.updateHandsonCategory(id, updateData).subscribe(
        (response) => {
          console.log('Category updated:', response);
          this.getCategories(); // Refresh the category list after successful update
        },
        (error) => {
          console.error('Error updating category:', error);
        }
      );
    }
  }

}
