import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';
@Component({
  selector: 'app-program-fees-category',
  templateUrl: './program-fees-category.component.html',
  styleUrls: ['./program-fees-category.component.css']
})
export class ProgramFeesCategoryComponent {
  programform: FormGroup;
  programlist: any[];
  editForm: FormGroup;
  constructor(private company: CounterService, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.createForms();
    this.getCategories();
  }
  createForms(): void {
    this.programform = this.formBuilder.group({
      title: ['', Validators.required],
    });

    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.programform.valid) {
      const formData = new FormData();
      formData.append('title', this.programform.value.categoryname);

      this.company.addprogramdetailcategory(formData).subscribe(
        (response: any) => {
          if (response.statusCode === '200') {
            alert('Data added successfully');
            this.getCategories();
          } else {
            alert('Something went wrong');
          }
        },
      );
    }
  }

  getCategories(): void {
    this.company.getprogramdetailcategory().subscribe((res: any) => {
      console.log(res);
      this.programlist = res.data;
    });
  }

  deleteCategory(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.company.deletepgmdetailcategory(id).subscribe(
        () => {
          console.log('Category deleted:', id);
          alert('Category Deleted');
          this.getCategories();
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }

  openEditModal(category: any): void {
    this.editForm.setValue({
      title: category.title,
    });
  }

  updateCategory(id: number): void {
    if (this.editForm.valid) {
      const updatedData = this.editForm.value;

      const formData = new FormData();
      formData.append('title', updatedData.categoryname);

      this.company.updateprogramdetailscategory(id, formData).subscribe(
        (res: any) => {
          console.log('Data updated successfully:', res);
          alert('Data Updated');
          this.getCategories();
        },
        (error) => {
          console.error('Failed to update category data:', error);
        }
      );
    }
  }
}
