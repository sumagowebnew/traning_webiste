import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'app-diploma-program-category',
  templateUrl: './diploma-program-category.component.html',
  styleUrls: ['./diploma-program-category.component.css']
})
export class DiplomaProgramCategoryComponent  implements OnInit{
  programform: any;
  program: any;
  programlist: any;
  editForm1: any;

  constructor(private our_pro:CounterService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.Createprogram();
    // this.auth.getToken();
    this.getprogram();
    this.createEditForm();
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

    getprogram(){
      this.our_pro.getourprogram().subscribe((res:any)=>{
        this.programlist=res.data;
        console.log(this.programlist);
        
      })
    }
    createEditForm() {
      this.editForm1 = this.formBuilder.group({
       
        name: ['', Validators.required],
       
      });
    }
  
    // Function to open the edit modal and populate form fields with the selected expert review data
    openEditModal(program: any) {
      this.editForm1.setValue({
       
        name: program.name,
        
      });
    }
  
    // Function to handle the update operation in the edit modal
    updateprogram(program: any): void {
      const updatedData = this.editForm1.value;
      this.our_pro.updateprogram(program.id, updatedData).subscribe(
        (res: any) => {
          console.log('Data updated successfully:', res);
          // Optionally, update the local list with the updated expert review or fetch the updated list again
          this.getprogram();
        },
        (error) => {
          console.error('Failed to update expert review data:', error);
        }
      );
    }
  
    deleteprogram(id:number){

      const confirmation = confirm('Are you sure you want to delete this category?');
      if (confirmation) {
        this.our_pro.deleteourpgm(id).subscribe(
          (response) => {
            console.log('Project deleted:', response);
            // You might want to refresh the categories list after deletion
            this.getprogram();
          },
          (error) => {
            console.error('Error deleting Project:', error);
          }
        );
      }
    }
    }


