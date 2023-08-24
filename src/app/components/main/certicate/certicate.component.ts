import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-certicate',
  templateUrl: './certicate.component.html',
  styleUrls: ['./certicate.component.css']
})
export class CerticateComponent implements OnInit{
  certificate: any;
  base64Image: string;
  certificatelist: any;
  courseDetails: any;
  subcourses: any;


  constructor( private counter:CounterService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.addcerticate();
    this.getcertificate();
    this.getCourse();
    this.getsubcoure()
    
  }

  getCourse(){
    this.counter.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });

  }
  getsubcoure(){
    this.counter.getsubcourse().subscribe((res) => {
      this.subcourses = res['data']
      // this.joinTables()
  })
}

  addcerticate(): void {
    this.certificate = this.formBuilder.group({
      course_id:['',Validators.required],
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
    formData.append('course_id',this.certificate.value.course_id);
    formData.append('title', this.certificate.value.title);
    formData.append('description',this.certificate.value.description),
    formData.append('image', this.base64Image);

    this.counter.addcertificate(formData).subscribe(
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
  getcertificate(){
    this.counter.getcertificate().subscribe((res:any)=>{
      console.log(res);
      
      this.certificatelist=res;

    })
  }
  deletecertificate(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.counter.deletecertificate(id).subscribe(
        (response) => {
          console.log('Certificate deleted:');
          alert(`Certificate Deleted`)
          // You might want to refresh the categories list after deletion
          this.getcertificate();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
}
