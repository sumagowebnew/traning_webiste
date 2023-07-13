import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertReviewComponent } from './expert-review.component';

describe('ExpertReviewComponent', () => {
  let component: ExpertReviewComponent;
  let fixture: ComponentFixture<ExpertReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertReviewComponent]
    });
    fixture = TestBed.createComponent(ExpertReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
