import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleReviewComponent } from './google-review.component';

describe('GoogleReviewComponent', () => {
  let component: GoogleReviewComponent;
  let fixture: ComponentFixture<GoogleReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleReviewComponent]
    });
    fixture = TestBed.createComponent(GoogleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
