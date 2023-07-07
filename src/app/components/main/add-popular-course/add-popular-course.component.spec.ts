import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPopularCourseComponent } from './add-popular-course.component';

describe('AddPopularCourseComponent', () => {
  let component: AddPopularCourseComponent;
  let fixture: ComponentFixture<AddPopularCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPopularCourseComponent]
    });
    fixture = TestBed.createComponent(AddPopularCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
