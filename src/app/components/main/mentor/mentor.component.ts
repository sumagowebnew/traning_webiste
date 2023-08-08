import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewWebService } from 'src/app/services/new-web.service';

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
  
  constructor(private newweb:NewWebService,private formBuilder:FormBuilder){}
  hireform: any;



  ngOnInit(): void {
    this.addmentors();
    this.getmentors();
    
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
        console.log('Data added successfully:', response);
        this.mentors = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  getmentors(){
    this.newweb.getmentor().subscribe((res:any)=>{
      console.log(res);
      this.mentorlist=res.data;
    })
  }
  deletementor(id: number) {
    this.newweb.deletementor(id).subscribe(
      () => {
        console.log('Archievement deleted successfully');
        // Optionally, update the local list by removing the deleted counter or fetch the updated list again
        this.getmentors();
      },
      (error) => {
        console.error('Failed to delete archivement:', error);
      }
    );
  }

}
