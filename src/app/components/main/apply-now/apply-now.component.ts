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
  this.counter.deleteapply_now(id)
    .subscribe(
      () => {
        console.log('Apply now deleted successfully');
        window.location.reload();
        // Perform any additional actions or display success message
      },
      (error) => {
        console.error('Failed to deleted', error);
        // Handle error, display error message, or perform alternative actions
      }
    );
}

}
