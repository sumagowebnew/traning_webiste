import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-cohorts',
  templateUrl: './cohorts.component.html',
  styleUrls: ['./cohorts.component.css']
})
export class CohortsComponent {
  batchForm: FormGroup;
  batches: any[] = [];

  constructor(private fb: FormBuilder, private service: CounterService) {
    this.batchForm = this.fb.group({
      start_date: [new Date().toISOString().split('T')[0], Validators.required],
      start_time: [''],
      end_time: [''],
      batch_name: ['']
    });
  }

  ngOnInit(): void {
    this.getBatches();
  }

  onSubmit(): void {
    const batchData = this.batchForm.value;
    this.service.addBatch(batchData).subscribe(
      (response: any) => {
        console.log('Batch added successfully:', response);
        this.getBatches(); // Refresh the batch list
        this.batchForm.reset(); // Optionally reset the form
      },
      (error) => {
        console.error('Failed to add batch:', error);
      }
    );
  }

  getBatches(): void {
    this.service.getBatches().subscribe(
      (batches: any[]) => {
        this.batches = batches;
        console.log(this.batches);
        
      },
      (error) => {
        console.error('Failed to fetch batches:', error);
      }
    );
  }

  onDeleteBatch(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this category?');
    if (confirmation) {
      this.service.deleteBatch(id).subscribe(
        (response) => {
          console.log('Batch deleted:', response);
          alert(`Batch Deleted:${response}`)
          // You might want to refresh the categories list after deletion
          this.getBatches();
        },
        (error) => {
          console.error('Error deleting Project:', error);
        }
      );
    }
  }
}
