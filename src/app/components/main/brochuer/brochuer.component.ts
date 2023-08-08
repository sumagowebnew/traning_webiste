import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OurProgramService } from 'src/app/services/our-program.service';

@Component({
  selector: 'app-brochuer',
  templateUrl: './brochuer.component.html',
  styleUrls: ['./brochuer.component.css']
})
export class BrochuerComponent implements OnInit{
  broucherform: any;
  broucher: any;
  broucherlist: any;

  constructor(private our:OurProgramService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.addbroucher();
    this.getbroucher();
    
  }

  addbroucher(): void {
    this.broucherform = this.formBuilder.group({
      name:['',Validators.required],
      
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

 
  onSubmit(): void {
   

    const formData = new FormData();
    formData.append('name',this.broucherform.value.name),
  
    formData.append('email', this.broucherform.value.email);
    formData.append('contact', this.broucherform.value.contact);
    

    this.our.addbroucher(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.broucher = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }
  getbroucher(){
    this.our.getbroucher().subscribe((res:any)=>{
      console.log(res.data);
      
      this.broucherlist=res.data;

    })
  }
  deletebrochuer(id: number) {
    this.our.deletebroucher(id).subscribe(
      () => {
        console.log('consulting  deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getbroucher();
      },
      (error) => {
        console.error('Failed to delete consulting:', error);
      }
    );
  }

}
