import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.component.html',
  styleUrls: ['./event-data.component.css']
})
export class EventDataComponent  implements OnInit{
  name:any
  eventlist: any;
  base64Images: string[] = [];
  evnetform: any;
  eventdata: any;
  details: any;

  constructor(private event:EventService,private formBuilder:FormBuilder){}

ngOnInit(): void {
  this.eventdetail();
  this.getevent();
  this.geteventdetail();
  
}
eventdetail(): void {
  this.evnetform = this.formBuilder.group({
    event_id:['',Validators.required],
    name: ['', Validators.required],
 
    selectedFiles: [null, Validators.required]
  });
}

onFileSelected(event: any, index: number): void {
  const file = event.target.files[0];
  this.convertToBase64(file, index);
}

convertToBase64(file: File, index: number): void {
  const reader = new FileReader();
  reader.onload = () => {
    this.base64Images[index] = reader.result as string;
  };
  reader.readAsDataURL(file);
}

onSubmit(): void {
  const formData = new FormData();
  formData.append('event_id', this.evnetform.value.event_id);
  formData.append('name', this.evnetform.value.name);
  formData.append('image[0]', this.base64Images[0]);
  formData.append('image[1]', this.base64Images[1]);

  this.event.addeventdetail(formData).subscribe(
    (response: any) => {
      console.log('Data added successfully:', response);
      this.eventdata = response;
    },
    (error) => {
      console.error('Failed to add course:', error);
    }
  );
}

geteventdetail(){
  this.event.geteventdetail().subscribe((res:any)=>{
    console.log(res);
    
    this.details=res;

  })
}




  getBySort(event: Event) {
    this.name = (event.target as HTMLSelectElement).value;
    // Use the selectedCategory value to filter videos
    if (this.name === '') {
      // Handle case when "All" category is selected
      this.getevent(); // Call the method to fetch all videos
    } else {
      // Handle other categories
    }
  }
  getevent(){
    this.event.getevent().subscribe((res:any)=>{
      this.eventlist=res.data;
      // console.log(this.eventlist);
      
    })
  }
  deleteeventdetail(id: number) {
    this.event.deleteeventdetail(id).subscribe(
      () => {
        console.log('Event  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.geteventdetail();
      },
      (error) => {
        console.error('Failed to delete event details:', error);
      }
    );
  }

}
