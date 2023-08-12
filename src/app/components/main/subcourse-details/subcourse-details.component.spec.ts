import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcourseDetailsComponent } from './subcourse-details.component';

describe('SubcourseDetailsComponent', () => {
  let component: SubcourseDetailsComponent;
  let fixture: ComponentFixture<SubcourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcourseDetailsComponent]
    });
    fixture = TestBed.createComponent(SubcourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
