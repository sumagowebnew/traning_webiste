import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewWebService } from 'src/app/services/new-web.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  FaqForm: any;
  faqs: any;
  faqlist: any;

  constructor(private newweb:NewWebService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.createFaqForm();
    this.getfaqs();
  }

  createFaqForm() {
    this.FaqForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });

  }
  onSubmit() {
    const formData = new FormData();
    formData.append('question', this.FaqForm.value.question);
    formData.append('answer', this.FaqForm.value.answer);
   
    // Call your CourseService method to upload the course with the formData
    this.newweb.addfaq(formData).subscribe(
    (response: any)=>{
      console.log('Created Successfully:', response);
            this.faqs = response;    
            
          },
          (error)=>console.error('failed to add course')
        );
    }

    getfaqs(){
      this.newweb.getfaq().subscribe((res:any)=>{
        this.faqlist=res.data;
        console.log(this.faqlist);
        
      })
    }
    
    deletefaq(id: number) {
      this.newweb.deletebfaq(id).subscribe(
        () => {
          console.log('Archievement deleted successfully');
          // Optionally, update the local list by removing the deleted counter or fetch the updated list again
          this.getfaqs();
        },
        (error) => {
          console.error('Failed to delete archivement:', error);
        }
      );
    }



}
