import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusPdfComponent } from './syllabus-pdf.component';

describe('SyllabusPdfComponent', () => {
  let component: SyllabusPdfComponent;
  let fixture: ComponentFixture<SyllabusPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusPdfComponent]
    });
    fixture = TestBed.createComponent(SyllabusPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
