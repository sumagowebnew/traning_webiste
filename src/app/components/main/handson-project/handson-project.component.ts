import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  ngOnInit(): void {
    this.getHandsonProject()
    this.getCategories()
    this.service.getsubcourse().subscribe((res) => {
      this.subcourses = res['data']
    })
  }
  getCategories() {
    this.service.getHandsonCategory().subscribe(
      (response:any) => {
        this.handsonCategoryDetails = response.data;
        console.log('Categories retrieved:', response);
      },
      (error) => {
        console.error('Error getting categories:', error);
      }
    );
  }
  constructor(private service: CounterService, private fb: FormBuilder) {
    this.handsonProject = this.fb.group({
      handson_category_id: [],
      sub_course_id: [1],
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

  getHandsonProject() {
    this.service.getHandsonProject().subscribe(
      (response) => {
        this.handsonProjectDetails = response;
        console.log('Projects retrieved:', response);
      },
      (error) => {
        console.error('Error getting projects:', error);
      }
    );
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

  updateProject(id: number) {
    if (this.handsonProjectUpdateForm.valid) {
      const updatedTitle = this.handsonProjectUpdateForm.value.title;
      const updateData = {
        handson_category_id: this.handsonProject.value.handson_category_id,
        sub_course_id: this.handsonProject.value.sub_course_id,
        title: this.handsonProject.value.title,
        desc: this.handsonProject.value.desc,
      }; // Construct the data object for update

      this.service.updateHandsonProject(id, updateData).subscribe(
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


}
