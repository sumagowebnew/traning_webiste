import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-syllabus-pdf',
  templateUrl: './syllabus-pdf.component.html',
  styleUrls: ['./syllabus-pdf.component.css']
})
export class SyllabusPdfComponent implements OnInit {
  syllabuspdfs: FormGroup;
  courseDetails: any[] = [];
  alluploadeddata:any;
  subcourses: any[] = [];
  file: string;
  constructor(private service: CounterService, private formBuilder: FormBuilder) {
    this.syllabuspdfs = this.formBuilder.group({
      sub_course_id: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.getSubcoursesbyId()
    this.getsyllabuspdfs()
  }
  

  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   this.convertToBase64(file);
  // }

  // convertToBase64(file: File): void {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.file = reader.result as string;
  //   };
  //   reader.readAsDataURL(file);
  // }
  onFileSelected(event: any): void {
  const file = event.target.files[0];
  const maxSizeInBytes = 10 * 1024 * 1024; 

  if (file && file.size <= maxSizeInBytes) {
    this.convertToBase64(file);
  } else {
    // Handle the case where the file is too large
    alert('File is too large. Please select a less than 10 mb file.');
    // You can also reset the file input to clear the selected file if needed
    event.target.value = null;
  }
}

convertToBase64(file: File): void {
  const reader = new FileReader();
  reader.onload = () => {
    this.file = reader.result as string;
  };
  reader.readAsDataURL(file);
}


  getCourse() {
    this.service.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data;
    });
  }
  getsyllabuspdfs() {
    this.service.getsyllabuspdf().subscribe((res: any) => {
      this.alluploadeddata = res.data;
    });
  }
  getSubcoursesbyId() {
    this.service.getSubcoursesdetail().subscribe((res: any) => {
      this.subcourses = res.data;
    });
  }

  onSubmit() {
    console.log("this.syllabuspdfs.value.sub_course_id",this.syllabuspdfs.value.sub_course_id)
    const formData = new FormData();
    formData.append('subcourse_id', this.syllabuspdfs.value.sub_course_id);
    formData.append('file', this.file);
    this.service.addsyllabuspdf(formData).subscribe(
      (response: any) => {
        if (response.statusCode == '200') {
          alert("Data added successfully");
          location.reload();
        } else {
          alert("Something went wrong");
        }
      },
    );
  }

  getSubCourseFromCourse(event) {
    console.log(event);
    var obj = {
      course_id: event.target.value
    };

    this.service.getSubCourse(obj).subscribe(alldist => {
      this.subcourses = alldist['data'];
    });
  }
   
  deletepdf(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.service.deletebsyllabuspdf(id).subscribe(
        (response) => {
          console.log('Data deleted:', response);
          alert(`Data Deleted`);
          // this.getsyllabus();
          location.reload();
        },
        (error) => {
          console.error('Failed to delete data:', error);
        }
      );
    }
  }
}
