import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactlist: any;

  constructor(private contact:ContactService){}

  ngOnInit(): void {
    this.contact.getcontact().subscribe((res:any)=>{
      // console.log(res);
      
      this.contactlist =res.data

    })

    
  }




}
