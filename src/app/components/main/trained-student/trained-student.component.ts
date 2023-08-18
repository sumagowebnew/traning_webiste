import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-trained-student',
  templateUrl: './trained-student.component.html',
  styleUrls: ['./trained-student.component.css']
})
export class TrainedStudentComponent implements OnInit {

  counterForm: any;
  counter: any;
  counterlist: any;
  editForm: any;
  studentform: any;
  
  constructor(private about:CounterService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.createCounterForm();
    this.getcounterdata();
    this.createEditForm();
  }

  createCounterForm() {
    this.studentform = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
    });

  }
  onSubmit() {
   

    const formData = new FormData();
    formData.append('name', this.studentform.value.name);
    formData.append('count', this.studentform.value.count);
    // formData.append('image', this.base64Image);

    this.about.addstudent(formData).subscribe(
      (response: any) => {
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
    getcounterdata(){
      this.about.getstudent().subscribe((res:any)=>{
        this.counterlist=res.data;
        console.log(this.counterlist);
        
      })
    }
    deletecounter(id: number) {
      this.about.deletestudent(id).subscribe(
        () => {
          console.log('Counter deleted successfully');
          // Optionally, update the local list by removing the deleted counter or fetch the updated list again
          this.getcounterdata();
        },
        (error) => {
          console.error('Failed to delete counter:', error);
        }
      );
    }
    createEditForm() {
      this.editForm = this.fb.group({
        name: ['', Validators.required],
        count:['',Validators.required]
      });
    }
    // Function to open the edit modal and populate form fields with the selected counter data
    openEditModal(consult: any) {
      this.editForm.setValue({
        name: consult.name,
       count:consult.count
       
      });
    }
  
    // Function to handle the update operation in the edit modal
    updatecounter(about: any): void {
      const updatedData = this.editForm.value;
      this.about.updatestudent(about.id, updatedData).subscribe(
        (res: any) => {
          console.log('Data updated successfully:', res);
          // Optionally, update the local list with the updated counter or fetch the updated list again
          this.getcounterdata();
        },
        (error) => {
          console.error('Failed to update archivement data:', error);
        }
      );
    }

}



