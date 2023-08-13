import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusModuleComponent } from './syllabus-module.component';

describe('SyllabusModuleComponent', () => {
  let component: SyllabusModuleComponent;
  let fixture: ComponentFixture<SyllabusModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusModuleComponent]
    });
    fixture = TestBed.createComponent(SyllabusModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
