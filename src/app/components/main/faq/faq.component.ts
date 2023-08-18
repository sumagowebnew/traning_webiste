import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  FaqForm: any;
  faqs: any;
  faqlist: any;
  editForm: any;
  courseDetails: any;

  constructor(private newweb:CounterService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.createFaqForm();
    this.getfaqs();
    this.getCourse();
  }

  getCourse(){
    this.newweb.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails);
    });

  }

  createFaqForm() {
    this.FaqForm = this.fb.group({
      course_id:['',Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
    
    });

  }
  onSubmit() {
    const formData = new FormData();
    formData.append('course_id',this.FaqForm.value.course_id) 
    formData.append('question', this.FaqForm.value.question);
    formData.append('answer', this.FaqForm.value.answer);
   
    // Call your CourseService method to upload the course with the formData
    this.newweb.addfaq(formData).subscribe(
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

    getfaqs(){
      this.newweb.getfaq().subscribe((res:any)=>{
        this.faqlist=res.data;
        console.log(this.faqlist);
        
      })
    }
    
    deletefaq(id: number) {
      const confirmation = confirm('Are you sure you want to delete this category?');
      if (confirmation) {
        this.newweb.deletebfaq(id).subscribe(
          (response) => {
            console.log('Faq  deleted:', response);
            alert(`Faq Deleted:${response}`)
            // You might want to refresh the categories list after deletion
            this.getfaqs();
          },
          (error) => {
            console.error('Error deleting Project:', error);
          }
        );
      }
    }
    createEditForm() {
      this.editForm = this.fb.group({
        course_id:['',Validators.required],
        question: ['', Validators.required],
        answer: ['', Validators.required],
        
      });
    }
    
    // Function to open the edit modal and populate form fields with the selected counter data
    openEditModal(counter: any) {
      this.editForm.setValue({
        course_id:counter.course_id,
       question:counter.question,
       answer:counter.answer,
       
      });
    }
  
    // Function to handle the update operation in the edit modal
    updatefaq(faq: any): void {
      const updatedData = this.editForm.value;
  
      const formData = new FormData();
      formData.append('course_id', updatedData.course_id);
      formData.append('question', updatedData.question);
      formData.append('answer', updatedData.answer);
      // formData.append('image', updatedData.selectedFile);
     
    
      this.newweb.updatefaq(faq.id, formData).subscribe(
        (res: any) => {
          console.log('Data updated successfully:', res);
          // Optionally, update the local list with the updated hire data or fetch the updated list again
          alert("Data Update successfully");
            location.reload();
          this.getfaqs();
         
        },
        (error) => {
          console.error('Failed to update hire data:', error);
        }
      );
    }



}
