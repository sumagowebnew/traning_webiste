import { Component, OnInit } from '@angular/core';

import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactlist: any;

  constructor(private contact:CounterService){}

  ngOnInit(): void {

    this.getcontact();
  }
  getcontact(){

      this.contact.getcontact().subscribe((res:any)=>{
      console.log(res);
      
      this.contactlist=res.data;

    })
  }

    deletecontact(id: number) {
      const confirmation = confirm('Are you sure you want to delete this category?');
      if (confirmation) {
        this.contact.deletecontact(id).subscribe(
          (response) => {
            console.log('Contact deleted:', response);
            alert(`Contact Deleted:${response}`)
            // You might want to refresh the categories list after deletion
            this.getcontact();
          },
          (error) => {
            console.error('Error deleting Project:', error);
          }
        );
      }
    }
    
  }





