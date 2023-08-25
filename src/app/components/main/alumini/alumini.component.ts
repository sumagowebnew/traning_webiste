import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';


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
  courseDetails: any;
  editForm:any;
  joinedAlumni: any;
  subcourses: any;

  constructor(private newweb: CounterService, private formBuilder: FormBuilder) { }




  ngOnInit(): void {
    this.addalumini();
    this.getalumini();
    this.getCourse();
    this.getsubcoure();
    this.createEditForm()

  }
  getCourse() {
    this.newweb.getcourse().subscribe((res: any) => {
      this.courseDetails = res.data; // Assign directly, assuming the data is an array
      console.log(this.courseDetails.name);
    });

  }
  getsubcoure(){
    this.newweb.getsubcourse().subscribe((res) => {
      this.subcourses = res['data']
      this.joinTables()
  })
}
  getalumini() {
    this.newweb.getalumini().subscribe((res: any) => {
      console.log(res);
      this.aluminilist = res.data;
      this.joinTables()
    })
  }
  joinTables() {
    if (this.subcourses.length > 0 && this.aluminilist.length > 0) {
      this.joinedAlumni = this.aluminilist.map((alumni) => {
        const matchingSubcourse = this.subcourses.find(subcourse => subcourse.subcourse_id === alumni.course_id);
        return {
          ...alumni,
          subcourses_name: matchingSubcourse ? matchingSubcourse.subcourses_name : 'Unknown Subcourse'
        };
      });
    }
  }

  addalumini(): void {
    this.aluminiform = this.formBuilder.group({

      course_id: ['', Validators.required],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      company: ['', Validators.required],
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
    formData.append('course_id', this.aluminiform.value.course_id);
    formData.append('name', this.aluminiform.value.name);
    formData.append('designation', this.aluminiform.value.designation);
    formData.append('company', this.aluminiform.value.company);
    formData.append('image', this.base64Image);

    this.newweb.addalumini(formData).subscribe(
      (response: any) => {
        if(response.StatusCode == '200') {
          // this.router.navigate(['/main/banner'])
          alert("Data added successfully");
          location.reload();

        } else {
          alert("Something went wrong");
        }
      },
      (error) => {
        console.error('Failed to add course:', error);
      }
    );
  }


  createEditForm() {
    this.editForm = this.formBuilder.group({
      course_id: ['', Validators.required],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      company: ['', Validators.required],
      selectedFile: [null, Validators.required]
    });
  }
  // Function to open the edit modal and populate form fields with the selected counter data
  openEditModal(consult: any) {
    this.editForm.setValue({
      course_id:consult.course_id,
      name: consult.name,
      designation: consult.designation,
      company:consult.company,
      selectedFile:null
      
      
    });
  }
  updateAlumini(alumini: any): void {

    const updatedData = this.editForm.value;
    
    const formData = new FormData();
    formData.append('course_id', updatedData.course_id);
    formData.append('name', updatedData.name);
    formData.append('designation', updatedData.designation);
    formData.append('company', updatedData.company);
    // formData.append('image', updatedData.selectedFile);
    if (updatedData.selectedFile) {
      formData.append('image', updatedData.selectedFile);
    } else {
      formData.append('image', this.base64Image);
    }
    this.newweb.updateAlumni(alumini.id, updatedData).subscribe(
      (res: any) => {
        console.log('Data updated successfully:', res);
        alert("data updated")
        // Optionally, update the alumini in the local list or fetch the updated list again
        this.getalumini();
      },
      (error) => {
        console.error('Failed to update alumini data:', error);
      }
    );
  }
  deletealuminies(id: number) {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.newweb.deletealumini(id).subscribe(
        (response) => {
          console.log('logo deleted:', response);
          // You might want to refresh the categories list after deletion
          this.getalumini();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
}


