import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-subcourse-details',
  templateUrl: './subcourse-details.component.html',
  styleUrls: ['./subcourse-details.component.css'],
})
export class SubcourseDetailsComponent implements OnInit {
  subCourseDetails: FormGroup;
  hirelist: any;
  editForm: FormGroup;
  allSubCourcesDetails: any;
  base64ImageBanner: string;
  base64ImageBackImage: string;
  courseDetails: any;
  subcourseDetails: any;
  subcourses: any;
  base64Model: string;
  modelFile: any;

  constructor(
    private service: CounterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getsubcourse();
    this.addhired();
    this.getSubcoursesdetail();
    this.getCourse();
    this.createEditForm();
  }

  getSubCourseFromCourse(event) {
    console.log(event);
    var obj = {
      course_id: event.target.value,
    };

    this.service.getSubCourse(obj).subscribe((alldist) => {
      this.subcourses = alldist['data'];
    });
  }

  addhired(): void {
    this.subCourseDetails = this.formBuilder.group({
      course_id: ['', Validators.required],
      sub_course_id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      custome_text: ['', Validators.required],
      selectedFile: [null, Validators.required],
      banner: ['', Validators.required],
      back_image: ['', Validators.required],
    });
  }



  convertToBase64Banner(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64ImageBanner = reader.result as string;
      console.log(this.base64ImageBanner)
    };
    reader.readAsDataURL(file);
  }

  convertToBase64BannerBackImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64ImageBackImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onFileSelectedBanner(event: any): void {
    const file = event.target.files[0];
    this.convertToBase64Banner(file);
  }

  onFileSelectedBackImage(event: any): void {
    const file = event.target.files[0];
    // this.modelFile = file;
    this.convertToBase64BannerBackImage(file);
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('course_id', this.subCourseDetails.value.course_id);
    formData.append('sub_course_id', this.subCourseDetails.value.sub_course_id);
    formData.append('title', this.subCourseDetails.value.title);
    formData.append('description', this.subCourseDetails.value.description);
    formData.append('custome_text', this.subCourseDetails.value.custome_text);
    formData.append('banner', this.base64ImageBanner);
    formData.append('back_image', this.base64ImageBackImage); // Use this.modelFile for back_image

    this.service.addSubscoursesdetail(formData).subscribe(
      (response: any) => {
        console.log(response);

        if (response.StatusCode == '200') {
          alert('Data added successfully');
          location.reload();
        } else {
          alert('Something went wrong');
        }
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  getSubcoursesdetail() {
    this.service.getSubcoursesdetail().subscribe((response: any) => {
      if (response.StatusCode == '200') {
        this.allSubCourcesDetails = response.data;
      } else {
        alert('Something went wrong');
      }
    });
  }
  getCourse() {
    this.service.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data;
    });
  }

  getsubcourse() {
    this.service.getsubcourse().subscribe((res: any) => {
      this.subcourses = res.data;
    });
  }

  deletehired(id: number) {
    const confirmation = confirm(
      'Are you sure you want to delete this category?'
    );
    if (confirmation) {
      this.service.deleteSubcoursedetail(id).subscribe(
        (response) => {
          console.log('Project deleted:', response);
          alert('Data Deleted');
          this.getSubcoursesdetail();
          location.reload();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }

  openEditModal(hire: any) {
    this.editForm = this.formBuilder.group({
      course_id: [hire.course_id, Validators.required],
      title: [hire.title, Validators.required],
      description: [hire.description, Validators.required],
      custome_text: [hire.custome_text, Validators.required],
      selectedFile: [null],
    });
  }

  createEditForm() {
    this.editForm = this.formBuilder.group({
      course_id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      custome_text: ['', Validators.required],
      selectedFile: [null],
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
      formData.append('banner', updatedData.base64ImageBanner);
    } else {
      formData.append('banner', updatedData.base64ImageBackImage);
    }

    this.service.updatesubcoursedetail(hire.id, formData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        this.getSubcoursesdetail();
        location.reload();
      },
      (error) => {
        console.error('Failed to update hire data:', error);
      }
    );
  }
}
