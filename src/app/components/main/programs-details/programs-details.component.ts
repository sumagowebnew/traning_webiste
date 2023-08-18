import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'app-programs-details',
  templateUrl: './programs-details.component.html',
  styleUrls: ['./programs-details.component.css']
})
export class ProgramsDetailsComponent implements OnInit{
  programform: any;
  base64Image: string |null;
  programdata: any;
  programlist: any;
  name: string;
  editForm1: any;

  constructor(private program:CounterService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.addprogramdetail();
    this.getprogramdetail();
    this.createEditForm();
    // this.getprogram();
    
  }
  
  addprogramdetail(): void {
    this.programform = this.formBuilder.group({
      program_id:['', Validators.required],
      introduction: ['', Validators.required],
      course_overview: ['', Validators.required],
      selectedFile: [null, Validators.required],
      learning_outcome: ['', Validators.required],
      prerequisite: ['', Validators.required],
      duration: ['', Validators.required],
      training_period: ['', Validators.required],
      batch: ['', Validators.required],
      project: ['', Validators.required],
      average_salary: ['', Validators.required],
      course_Name: ['', Validators.required],
      career_opportunity: ['', Validators.required],
      why_sumago: ['', Validators.required],
      trainee: ['', Validators.required],
      course_level: ['', Validators.required],
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
    formData.append('program_id', this.programform.value.program_id);
    formData.append('introduction', this.programform.value.introduction);
    formData.append('course_overview', this.programform.value.course_overview);
    formData.append('image', this.base64Image);
    formData.append('learning_outcome', this.programform.value.learning_outcome);
    formData.append('prerequisite', this.programform.value.prerequisite);
    formData.append('duration', this.programform.value.duration);
    formData.append('training_period', this.programform.value.training_period);
    formData.append('batch', this.programform.value.batch);
    formData.append('project', this.programform.value.project);
    formData.append('average_salary', this.programform.value.average_salary);
    formData.append('course_Name', this.programform.value.course_Name);
    formData.append('career_opportunity', this.programform.value.career_opportunity);
    formData.append('why_sumago', this.programform.value.name);
    formData.append('trainee', this.programform.value.trainee);
    formData.append('course_level', this.programform.value.course_level);
    // formData.append('name', this.programform.value.name);

    this.program.addprogramdetail(formData).subscribe(
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
  getprogramdetail(){
    this.program.getprogramdetail().subscribe((res:any)=>{
      console.log(res);
      
      this.programlist=res;

    })
  }
  getBySort(event: Event) {
    this.name = (event.target as HTMLSelectElement).value;
    // Use the selectedCategory value to filter videos
    if (this.name === '') {
      // Handle case when "All" category is selected
      this.getprogram(); // Call the method to fetch all videos
    } else {
      // Handle other categories
    }
  }
  getprogram(){
    this.program.getourprogram().subscribe((res:any)=>{
      this.programlist=res.data;
      console.log(this.programlist);
      
    })
  }
  deleteprogramdetail(id:number){

    this.program.deletepgmdetail(id).subscribe((res:any)=>{
      console.log('Program deleted successfully');
      // Optionally, update the local list by removing the deleted expert review or fetch the updated list again
      this.getprogram();
    },
    (error) => {
      console.error('Failed to delete Program :', error);
    }
  );
    }

    createEditForm() {
      this.editForm1 = this.formBuilder.group({
       
        program_id:['', Validators.required],
        introduction: ['', Validators.required],
        course_overview: ['', Validators.required],
        selectedFile: [null, Validators.required],
        learning_outcome: ['', Validators.required],
        prerequisite: ['', Validators.required],
        duration: ['', Validators.required],
        training_period: ['', Validators.required],
        batch: ['', Validators.required],
        project: ['', Validators.required],
        average_salary: ['', Validators.required],
        course_Name: ['', Validators.required],
        career_opportunity: ['', Validators.required],
        why_sumago: ['', Validators.required],
        trainee: ['', Validators.required],
        course_level: ['', Validators.required],
       
      });
    }
  
    // Function to open the edit modal and populate form fields with the selected expert review data
    openEditModal(program: any) {
      this.editForm1.setValue({
       
      
        program_id:program.program_id,
        introduction:program.introduction,
        course_overview:program.course_overview ,
        selectedFile:program.selectedFile ,
        learning_outcome:program.learning_outcome ,
        prerequisite: program.prerequisite,
        duration:program.duration ,
        training_period:program.training_period ,
        batch: program.batch,
        project:program.project,
        average_salary:program.average_salary ,
        course_Name: program.course_Name,
        career_opportunity:program.career_opportunity ,
        why_sumago:program.why_sumago ,
        trainee:program.trainee,
        course_level:program.course_level,
        
      });
    }
  
    // Function to handle the update operation in the edit modal
    updateprogram(program: any): void {
      const updatedData = this.editForm1.value;
      this.program.updateprogramdetails(program.id, updatedData).subscribe(
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
  

}
