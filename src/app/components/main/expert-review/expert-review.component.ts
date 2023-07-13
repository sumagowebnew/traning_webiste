import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-expert-review',
  templateUrl: './expert-review.component.html',
  styleUrls: ['./expert-review.component.css']
})
export class ExpertReviewComponent implements OnInit {
  expertform: any;
  base64Image: string;
  expert: any;
  expertlist: any;

  constructor(private count:CounterService,private formBuilder:FormBuilder){}

    ngOnInit(): void {
      this.addexpert();
      this.getexpert();
      
    }
    addexpert(): void {
      this.expertform = this.formBuilder.group({
        review:['',Validators.required],
        name: ['', Validators.required],
        company_position: ['', Validators.required],
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
      formData.append('review',this.expertform.value.review),
      formData.append('name', this.expertform.value.name);
      formData.append('company_position', this.expertform.value.company_position);
      formData.append('image', this.base64Image);
  
      this.count.addexpertreview(formData).subscribe(
        (response: any) => {
          console.log('Data added successfully:', response);
          this.expert = response;
        },
        (error) => {
          console.error('Failed to add course:', error);
        }
      );
    }
    getexpert(){
      this.count.getexpertreview().subscribe((res:any)=>{
        console.log(res);
        
        this.expertlist=res;
  
      })
    }
}
