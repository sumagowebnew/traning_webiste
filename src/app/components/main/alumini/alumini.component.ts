import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewWebService } from 'src/app/services/new-web.service';

@Component({
  selector: 'app-alumini',
  templateUrl: './alumini.component.html',
  styleUrls: ['./alumini.component.css']
})
export class AluminiComponent implements OnInit {
  aluminiform: any;
  base64Image: string;
  aluminies: any;
  aluminilist: any;

  constructor(private newweb:NewWebService,private formBuilder:FormBuilder){}




  ngOnInit(): void {
    this.addalumini();
    this.getalumini();
    
  }
  addalumini(): void {
    this.aluminiform = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      company:['',Validators.required],
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
    formData.append('name', this.aluminiform.value.name);
    formData.append('designation', this.aluminiform.value.designation);
    formData.append('company',this.aluminiform.value.company);
    formData.append('image', this.base64Image);

    this.newweb.addalumini(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.aluminies = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }

  getalumini(){
    this.newweb.getalumini().subscribe((res:any)=>{
      console.log(res);
      this.aluminilist=res.data;
    })
  }
  updateAlumini(alumini: any): void {

  const updateData = new FormData();
  updateData.append('name', alumini.name);
  updateData.append('designation', alumini.designation);
  updateData.append('company', alumini.company);
  updateData.append('image', this.base64Image);

  this.newweb.updateAlumni(alumini.id, updateData).subscribe(
    (res: any) => {
      console.log('Data updated successfully:', res);
      // Optionally, update the alumini in the local list or fetch the updated list again
      this.getalumini();
    },
    (error) => {
      console.error('Failed to update alumini data:', error);
    }
  );
}
deletealuminies(id: number) {
  this.newweb.deletealumini(id)
    .subscribe(
      () => {
        console.log('Alumini deleted successfully');
        window.location.reload();
        // Perform any additional actions or display success message
      },
      (error) => {
        console.error('Failed to delete alumini', error);
        // Handle error, display error message, or perform alternative actions
      }
    );
}
}


