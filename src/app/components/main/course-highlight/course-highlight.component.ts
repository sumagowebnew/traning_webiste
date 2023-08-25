import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-course-highlight',
  templateUrl: './course-highlight.component.html',
  styleUrls: ['./course-highlight.component.css']
})
export class CourseHighlightComponent implements OnInit {
  subCourseDetails: FormGroup;
  subcourses: any;
  base64Image: string;
  courseDetails: any;
  aluminilist: any;
  editForm: FormGroup<{ course_id: FormControl<string>; name: FormControl<string>; designation: FormControl<string>; company: FormControl<string>; selectedFile: FormControl<null>; }>;
  joinedFaqs: any;

  constructor(private service: CounterService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   
    this.getsubcourse();
    this.addalumini();
    this.getalumini();

  }
    getCourse() {
      this.service.getcourse().subscribe((res: any) => {
        this.courseDetails = res.data; // Assign directly, assuming the data is an array
        console.log(this.courseDetails);
      });
  
    }
    addalumini(): void {
      this.subCourseDetails = this.formBuilder.group({
  
    
        course_id: ['', Validators.required],
        highlights: ['', Validators.required],
       
      });
    }
  
   
    onSubmit(): void {
      const formData = new FormData();
      formData.append('course_id', this.subCourseDetails.value.course_id);
      formData.append('highlights', this.subCourseDetails.value.highlights);
  
  
      this.service.addcoursehigh(formData).subscribe(
        (response: any) => {
          if(response.StatusCode == '200') {
            // this.router.navigate(['/main/banner'])
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
  
    getalumini() {
      this.service.getcoursehigh().subscribe((res: any) => {
        console.log(res);
        this.aluminilist = res.data;
        this.joinTables()
      })
    }
    getsubcourse() {
      this.service.getsubcourse().subscribe((res) => {
        this.subcourses = res['data'];
        this.joinTables()
       
      });
    }
    joinTables(): void {
      if (this.subcourses.length > 0 && this.aluminilist.length > 0) {
        this.joinedFaqs = this.aluminilist.map((faq) => {
          const matchingSubcourse = this.subcourses.find(subcourse => subcourse.subcourses_id === faq.course_id);
          return {
            ...faq,
            subcourses_name: matchingSubcourse ? matchingSubcourse.subcourses_name : 'Unknown Course'
          };
        });
      }
    }
    // createEditForm() {
    //   this.editForm = this.formBuilder.group({
    //     course_id: ['', Validators.required],
    //     highlights: ['', Validators.required]
       
    //   });
    // }
    // // Function to open the edit modal and populate form fields with the selected counter data
    // openEditModal(consult: any) {
    //   this.editForm.setValue({
    //     course_id:consult.course_id,
    //     highlights: consult.highlights,
       
    //   });
    // }
    // updateAlumini(alumini: any): void {
  
    //   const updateData = new FormData();
    //   updateData.append('course_id', alumini.course_id);
    //   updateData.append('highlights', alumini.highlights);
     
  
    //   this.service.updatecoursehigh(alumini.id, updateData).subscribe(
    //     (res: any) => {
    //       console.log('Data updated successfully:', res);
    //       // Optionally, update the alumini in the local list or fetch the updated list again
    //       this.getalumini();
    //     },
    //     (error) => {
    //       console.error('Failed to update alumini data:', error);
    //     }
    //   );
    // }
    deletealuminies(id: number) {
      const confirmation = confirm('Are you sure you want to delete this category?');
      if (confirmation) {
        this.service.deletecoursehigh(id).subscribe(
          (response) => {
            console.log('Data deleted:', response);
            // You might want to refresh the categories list after deletion
            this.getalumini();
          },
          (error) => {
            console.error('Error deleting Project:', error);
          }
        );
      }
    }
  }
