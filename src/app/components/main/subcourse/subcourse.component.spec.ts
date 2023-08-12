import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcourseComponent } from './subcourse.component';

describe('SubcourseComponent', () => {
  let component: SubcourseComponent;
  let fixture: ComponentFixture<SubcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcourseComponent]
    });
    fixture = TestBed.createComponent(SubcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
