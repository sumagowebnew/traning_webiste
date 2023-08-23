import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-subcourse-details',
  templateUrl: './subcourse-details.component.html',
  styleUrls: ['./subcourse-details.component.css']
})
export class SubcourseDetailsComponent implements OnInit {
  subCourseDetails: FormGroup;
  hirelist: any;
  editForm: FormGroup;

  base64Image: string;
  courseDetails: any;
  subcourseDetails: any;
  subcourses: any;

  constructor(private service: CounterService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getsubcourse();
    this.addhired();
    this.gethired();

    this.createEditForm();
  }

  getsubcourse(){
    this.service.getsubcourse().subscribe((res) => {
      this.subcourses = res['data']
    })
  }

  addhired(): void {
    this.subCourseDetails = this.formBuilder.group({
      course_id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      custome_text: ['', Validators.required],
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
    formData.append('course_id', this.subCourseDetails.value.course_id);
    formData.append('title', this.subCourseDetails.value.title);
    formData.append('description', this.subCourseDetails.value.description);
    formData.append('custome_text', this.subCourseDetails.value.custome_text);
    formData.append('banner', this.base64Image);

    this.service.addSubscoursesdetail(formData).subscribe(
      (response: any) => {
        if (response.StatusCode == '200') {
          alert("Data added successfully");
          location.reload();
        } else {
          alert("Something went wrong");
        }
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  gethired() {
    this.service.getSubcoursesdetail().subscribe((res: any) => {
      console.log(res);
      this.hirelist = res;
    });
  }

  deletehired(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.service.deleteSubcoursedetail(id).subscribe(
        (response) => {
          console.log('Project deleted:', response);
          this.gethired();
          location.reload();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }

  openEditModal(hire: any) {
    this.editForm.setValue({
      course_id: hire.course_id,
      title: hire.title,
      description: hire.description,
      custome_text: hire.custome_text,
      selectedFile: null
    });
  }

  createEditForm() {
    this.editForm = this.formBuilder.group({
      course_id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      custome_text: ['', Validators.required],
      selectedFile: [null]
    });
  }

  updateHired(hire: any): void {
    const updatedData = this.editForm.value;

    const formData = new FormData();
    formData.append('course_id', updatedData.course_id);
    formData.append('title', updatedData.title);
    formData.append('description', updatedData.description);
    formData.append('custome_text', updatedData.custome_text);

    if (updatedData.selectedFile) {
      formData.append('banner', updatedData.selectedFile);
    } else {
      formData.append('banner', this.base64Image);
    }

    this.service.updatesubcoursedetail(hire.id, formData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        this.gethired();
        location.reload();
      },
      (error) => {
        console.error('Failed to update hire data:', error);
      }
    );
  }
}
