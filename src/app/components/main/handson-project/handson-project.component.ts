import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-handson-project',
  templateUrl: './handson-project.component.html',
  styleUrls: ['./handson-project.component.css']
})
export class HandsonProjectComponent implements OnInit {
  handsonProjectDetails: any[];
  handsonProject: FormGroup;
  handsonProjectUpdateForm: FormGroup;
  subcourses: any
  handsonCategoryDetails: any[]
  joinedHandsonProjects: any[];
  editForm: any;
  ngOnInit(): void {
    this.getHandsonProject()
    this.getCategories()
    this.getsubcourse()
    this.createEditForm()
    
  }
  
  getsubcourse() {
    this.service.getsubcourse().subscribe((res) => {
      this.subcourses = res['data'];
      this.joinTables();
    });
  }

  getCategories() {
    this.service.getHandsonCategory().subscribe(
      (response: any) => {
        this.handsonCategoryDetails = response.data;
        this.joinTables();
      },
      (error) => {
        console.error('Error getting categories:', error);
      }
    );
  }

  getHandsonProject() {
    this.service.getHandsonProject().subscribe(
      (response) => {
        this.handsonProjectDetails = response;
        this.joinTables();
      },
      (error) => {
        console.error('Error getting projects:', error);
      }
    );
  }

  joinTables() {
    if (
      this.subcourses.length > 0 &&
      this.handsonCategoryDetails.length > 0 &&
      this.handsonProjectDetails.length > 0
    ) {
      this.joinedHandsonProjects = this.handsonProjectDetails.map((project) => {
        const matchingSubcourse = this.subcourses.find(subcourse => subcourse.subcourses_id === project.sub_course_id);
        const matchingCategory = this.handsonCategoryDetails.find(handsonCategoryDetails => handsonCategoryDetails.id === project.handson_category_id);
        return {
          ...project,
          subcourses_name: matchingSubcourse ? matchingSubcourse.subcourses_name : 'Unknown Course',
          title: matchingCategory ? matchingCategory.title : 'Unknown Category'
        };
      });
    }
  }
  constructor(private service: CounterService, private fb: FormBuilder) {
    this.handsonProject = this.fb.group({
      handson_category_id: [],
      sub_course_id: [],
      title: [''],
      desc: [''],
    });

    // Initialize the update form
    this.handsonProjectUpdateForm = this.fb.group({
      handson_category_id: [''],
      sub_course_id: [''],
      title: [''],
      desc: [''],

    });
  }

 

  // getCourse() {
  //   this.service.getsubcourse().subscribe((allsubcourse: any) => {
  //     this.subcourse = allsubcourse['data'];
  //   });
  // }


  addProjects() {
    if (this.handsonProject.valid) {
      const data = {
        handson_category_id: this.handsonProject.value.handson_category_id,
        sub_course_id: this.handsonProject.value.sub_course_id,
        title: this.handsonProject.value.title,
        desc: this.handsonProject.value.desc,
      };
      this.service.addHandosnProject(data).subscribe(
        (response: any) => {

          this.handsonProject.reset();
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
  }

  deleteProjects(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.service.deleteHandsonProject(id).subscribe(
        (response) => {
          console.log('Project deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getHandsonProject();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
  openEditModal(hire: any) {
    this.editForm.setValue({
      handson_category_id: hire.handson_category_id,
      sub_course_id: hire.sub_course_id,
      title:hire.title,
      desc: hire.desc // Use the 'image' property from the hire object
    });
  }
  
  createEditForm() {
    this.editForm = this.fb.group({
      handson_category_id:['',Validators.required],
      sub_course_id:['',Validators.required],
      title: ['', Validators.required],
      desc: ['', Validators.required],
      
    });
  }
  // Function to handle the update operation in the edit modal
  updateHired(hire: any): void {
    const updatedData = this.editForm.value;
  
    const formData = new FormData();
    formData.append('handson_category_id', updatedData.handson_category_id);
    formData.append('sub_course_id', updatedData.sub_course_id);
    formData.append('title', updatedData.title);
    formData.append('desc', updatedData.desc);
  
  



      this.service.updateHandsonProject(hire.id, updatedData).subscribe(
        (response) => {
          console.log('Project updated:', response);
          this.getHandsonProject(); // Refresh the category list after successful update
        },
        (error) => {
          console.error('Error updating Project:', error);
        }
      );
    }
  }



