  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';
  import { CounterService } from 'src/app/services/counter.service';


  @Component({
    selector: 'app-hire',
    templateUrl: './hire.component.html',
    styleUrls: ['./hire.component.css']
  })
  export class HireComponent  implements OnInit{
    base64Image: string;
    hired: any;
    hirelist: any;
    editForm:any;

    constructor(private newweb:CounterService,private formBuilder:FormBuilder){}
    hireform: any;



    ngOnInit(): void {
      this.addhired();
      this.gethired();
      this.createEditForm();
      
    }
    addhired(): void {
      this.hireform = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        selectedFile: [null, Validators.required]
      });
    }

    onFileSelected(event: any): void {
      const file = event.target.files[0];
      this.convertToBase64(file);
    }

    convertToBase64(file: File): void {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }

    onSubmit(): void {
    

      const formData = new FormData();
      formData.append('title', this.hireform.value.title);
      formData.append('description', this.hireform.value.description);
      formData.append('image', this.base64Image);

      this.newweb.addhire(formData).subscribe(
        (response: any) => {
          if(response.StatusCode == '200') {
            // this.router.navigate(['/main/banner'])
            alert("Data added successfully");
            location.reload();

          } else {
            alert("Something went wrong");
          }
        },
      );
    }

    gethired(){
      this.newweb.gethire().subscribe((res:any)=>{
        console.log(res);
        this.hirelist=res;
      })
    }
    deletehired(id: number) {
      const confirmation = confirm('Are you sure you want to delete this category?');
      if (confirmation) {
        this.newweb.deletehire(id).subscribe(
          (response) => {
            console.log('Project deleted:', response);
            alert("Data Deleted")
            // You might want to refresh the categories list after deletion
            this.gethired();
            location.reload();
          },
          (error) => {
            console.error('Error deleting Project:', error);
          }
        );
      }
    }
  
    
    // Function to open the edit modal and populate form fields with the selected counter data
    openEditModal(hire: any) {
      this.editForm.setValue({
        title: hire.title,
        description: hire.description,
        selectedFile: null // Use the 'image' property from the hire object
      });
    }
    
    createEditForm() {
      this.editForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        selectedFile: [null, Validators.required]
      });
    }
    // Function to handle the update operation in the edit modal
    updateHired(hire: any): void {
      const updatedData = this.editForm.value;
    
      const formData = new FormData();
      formData.append('title', updatedData.title);
      formData.append('description', updatedData.description);
      // formData.append('image', updatedData.selectedFile);
      if (updatedData.selectedFile) {
        formData.append('image', updatedData.selectedFile);
      } else {
        formData.append('image', this.base64Image);
      }
    
      this.newweb.updatehire(hire.id, formData).subscribe(
        (res: any) => {
          console.log('Data updated successfully:', res);
          alert("Data Updated")
          // Optionally, update the local list with the updated hire data or fetch the updated list again
          this.gethired();
          location.reload();
        },
        (error) => {
          console.error('Failed to update hire data:', error);
        }
      );
    }

  }


