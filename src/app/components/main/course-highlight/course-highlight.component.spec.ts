import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHighlightComponent } from './course-highlight.component';

describe('CourseHighlightComponent', () => {
  let component: CourseHighlightComponent;
  let fixture: ComponentFixture<CourseHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseHighlightComponent]
    });
    fixture = TestBed.createComponent(CourseHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
