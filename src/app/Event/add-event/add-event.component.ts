import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventform: any;
  eventdata: any;
  eventlist: any;
  base64Images: any;

  constructor(private event:EventService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.CreateEvent();

    this.getevent();
  }

  CreateEvent() {
    this.eventform = this.fb.group({
      name: ['', Validators.required],
      selectedFiles: [null, Validators.required]
     
    });

  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.convertToBase64(file);
  }
  
  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Images = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.eventform.value.name);
    formData.append('image',this.base64Images)
   
   
    // Call your CourseService method to upload the course with the formData
    this.event.addevent(formData).subscribe(
    (response: any)=>{
      console.log('Created Successfully:', response);
            this.eventdata = response;    
            
          },
          (error)=>console.error('failed to add course')
        );
    }

    getevent(){

      this.event.getevent().subscribe((res:any)=>{
        this.eventlist=res.data;
        console.log(this.eventlist);
        
      })
    }
    deleteevent(id: number) {
      this.event.deleteevent(id).subscribe(
        () => {
          console.log('Event deleted successfully');
          // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
          this.getevent();
        },
        (error) => {
          console.error('Failed to delete Event:', error);
        }
      );
    }

  
}
