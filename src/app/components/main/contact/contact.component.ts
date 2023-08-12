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
      this.contact.deletecontact(id).subscribe(
        () => {
          console.log('Conatct deleted successfully');
          // Optionally, update the local list by removing the deleted counter or fetch the updated list again
          this.getcontact();
        },
        (error) => {
          console.error('Failed to delete Contact:', error);
        }
      );
    }
    
  }





