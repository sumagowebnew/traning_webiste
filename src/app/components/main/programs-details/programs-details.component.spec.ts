import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsDetailsComponent } from './programs-details.component';

describe('ProgramsDetailsComponent', () => {
  let component: ProgramsDetailsComponent;
  let fixture: ComponentFixture<ProgramsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsDetailsComponent]
    });
    fixture = TestBed.createComponent(ProgramsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
