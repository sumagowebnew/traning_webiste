import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit{
  mentorform: any;
  base64Image: string;
  mentors: any;
  mentorlist: any;
  editForm: any;
  courseDetails: any;
  subcourses: any;
  joinedMentors: any;
  
  constructor(private newweb:CounterService,private formBuilder:FormBuilder){}
  hireform: any;



  ngOnInit(): void {
    this.addmentors();
    this.getmentors();
    this.getsubcoure();
    this.createEditForm();
    
  }

  // getCourse(){
  //   this.newweb.getcourse().subscribe((res: any) => {
  //     this.courseDetails = res.data; // Assign directly, assuming the data is an array
  //     console.log(this.courseDetails);
  //   });

  // }
  


  addmentors(): void {
    this.mentorform = this.formBuilder.group({
     
      name: ['', Validators.required],
      designation: ['', Validators.required],
      company:['',Validators.required],
      selectedFile: [null, Validators.required],
      course_id: [null, Validators.required] 
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
  
    formData.append('name', this.mentorform.value.name);
    formData.append('designation', this.mentorform.value.designation);
    formData.append('company', this.mentorform.value.company);
    formData.append('image', this.base64Image);
    formData.append('course_id', this.mentorform.value.course_id); 
  
    this.newweb.addmentor(formData).subscribe(
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
  
  getsubcoure(){
    this.newweb.getsubcourse().subscribe((res) => {
      this.subcourses = res['data']
      this.joinTables()
  })
}
  getmentors(){
    this.newweb.getmentor().subscribe((res:any)=>{
      
      this.mentorlist=res.data;
      console.log(this.mentorlist);
      this.joinTables()
    })
  }
  joinTables() {
    if (this.subcourses.length > 0 && this.mentorlist.length > 0) {
      this.joinedMentors = this.mentorlist.map((mentor) => {
        const matchingSubcourse = this.subcourses.find(subcourse => subcourse.subcourse_id === mentor.mentor_subcourse_id);
        return {
          ...mentor,
          subcourses_name: matchingSubcourse ? matchingSubcourse.subcourses_name : 'Unknown Subcourse'
        };
      });
    }
  }
  deletementor(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.newweb.deletementor(id).subscribe(
        (response) => {
          console.log('Project deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getmentors();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
  openEditModal(hire: any) {
    this.editForm.setValue({
      name: hire.name,
      designation: hire.designation,
      company: hire.company,
      selectedFile: null,
      course_id: hire.course_id
    });
  }

  createEditForm() {
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      company: ['', Validators.required],
      selectedFile: [null, Validators.required],
      course_id: [null, Validators.required]
    });
  }

  // ...

  updatementor(hire: any): void {
    const updatedData = this.editForm.value;

    const formData = new FormData();
    formData.append('course_id', updatedData.course_id);
    formData.append('name', updatedData.name);
    formData.append('designation', updatedData.designation);
    formData.append('company', updatedData.company);
    
    // formData.append('image', updatedData.selectedFile);
    if (updatedData.selectedFile) {
      formData.append('image', updatedData.selectedFile);
    } else {
      formData.append('image', this.base64Image);
    }
  
    this.newweb.updatementor(hire.id, formData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated hire data or fetch the updated list again
        alert("Data Update successfully");
          location.reload();
        this.getmentors();
       
      },
      (error) => {
        console.error('Failed to update hire data:', error);
      }
    );
  }

}
