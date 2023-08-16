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
  
  constructor(private newweb:CounterService,private formBuilder:FormBuilder){}
  hireform: any;



  ngOnInit(): void {
    this.addmentors();
    this.getmentors();
    this.getCourse();
    
  }

  getCourse(){
    this.newweb.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });

  }
  addmentors(): void {
    this.mentorform = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      company:['',Validators.required],
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
    formData.append('name', this.mentorform.value.name);
    formData.append('designation', this.mentorform.value.designation);
    formData.append('company',this.mentorform.value.company);
    formData.append('image', this.base64Image);

    this.newweb.addmentor(formData).subscribe(
      (response: any) => {
        if(response.statusCode == '200') {
          // this.router.navigate(['/main/banner'])
          alert("Data added successfully");
          location.reload();

        } else {
          alert("Something went wrong");
        }
      },
    );
  }

  getmentors(){
    this.newweb.getmentor().subscribe((res:any)=>{
      console.log(res);
      this.mentorlist=res.data;
    })
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
  createEditForm() {
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      company:['',Validators.required],
      selectedFile: [null, Validators.required]
    });
  }
  
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(counter: any) {
    this.editForm.setValue({
      name: counter.name,
      designation: counter.designation,
      company:counter.company,
      image:counter.base64Image
    });
  }

  // Function to handle the update operation in the edit modal
  updatementor(mentor: any): void {
    const updatedData = this.editForm.value;
    this.newweb.updatementor(mentor.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        // Optionally, update the local list with the updated counter or fetch the updated list again
        this.getmentors();
      },
      (error) => {
        console.error('Failed to update archivement data:', error);
      }
    );
  }

}
