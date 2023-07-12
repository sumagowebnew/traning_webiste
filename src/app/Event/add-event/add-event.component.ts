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

  constructor(private event:EventService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.CreateEvent();
    this.getevent();
  }

  CreateEvent() {
    this.eventform = this.fb.group({
      name: ['', Validators.required],
     
    });

  }
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.eventform.value.name);
   
   
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

  
}
