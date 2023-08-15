import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  applynowlist: any;

  constructor(private counter:CounterService){}

ngOnInit(): void {
  this.getapplynow();
  
}
getapplynow(){
  this.counter.getapply_now().subscribe((res:any)=>{
    console.log(res);
    this.applynowlist=res.applicants;
    console.log(this.applynowlist);
    
  })
}
deleteapplynow(id: number) {
  const confirmation = confirm('Are you sure you want to delete this category?');
  if (confirmation) {
    this.counter.deleteapply_now(id).subscribe(
      (response) => {
        console.log('logo deleted:', response);
        // You might want to refresh the categories list after deletion
        this.getapplynow();
      },
      (error) => {
        console.error('Error deleting Project:', error);
      }
    );
  }
}

}
