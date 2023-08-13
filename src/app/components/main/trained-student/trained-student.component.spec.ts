import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainedStudentComponent } from './trained-student.component';

describe('TrainedStudentComponent', () => {
  let component: TrainedStudentComponent;
  let fixture: ComponentFixture<TrainedStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainedStudentComponent]
    });
    fixture = TestBed.createComponent(TrainedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
