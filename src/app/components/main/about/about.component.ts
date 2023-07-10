import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutForm: FormGroup;
  teachers: any;
  base64Image: string | null = null;

  constructor(
    private counter: CounterService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.aboutTeacher();
  }

  aboutTeacher(): void {
    this.aboutForm = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
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
    formData.append('name', this.aboutForm.value.name);
    formData.append('designation', this.aboutForm.value.designation);
    formData.append('image', this.base64Image);

    this.counter.addteacher(formData).subscribe(
      (response: any) => {
        console.log('Data added successfully:', response);
        this.teachers = response;
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }
}
