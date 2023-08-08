import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { OurProgramService } from 'src/app/services/our-program.service';

@Component({
  selector: 'app-diploma-program-category',
  templateUrl: './diploma-program-category.component.html',
  styleUrls: ['./diploma-program-category.component.css']
})
export class DiplomaProgramCategoryComponent  implements OnInit{
  programform: any;
  program: any;
  programlist: any;

  constructor(private our_pro:OurProgramService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.Createprogram();
    // this.auth.getToken();
    this.getprogram();
  }

  Createprogram() {
    this.programform = this.formBuilder.group({
      name: ['', Validators.required],
     
    });

  }
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.programform.value.name);
   
   
    // Call your CourseService method to upload the course with the formData
    this.our_pro.addourprogram(formData).subscribe(
    (response: any)=>{
      console.log('Created Successfully:', response);
            this.program = response;    
            
          },
          (error)=>console.error('failed to add course')
        );
    }

    getprogram(){
      this.our_pro.getourprogram().subscribe((res:any)=>{
        this.programlist=res.data;
        console.log(this.programlist);
        
      })
    }
    deleteprogram(id:number){

      this.our_pro.deleteourpgm(id).subscribe((res:any)=>{
        console.log('Program deleted successfully');
        // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
        this.getprogram();
      },
      (error) => {
        console.error('Failed to delete Program :', error);
      }
    );
      }
    }


