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


  ngOnInit(): void {
    this.getCategories()
    this.addcompany();
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
          // You might want to refresh the categories list after deletion
          this.getCategories();
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
  updateCategory(id: number) {
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
