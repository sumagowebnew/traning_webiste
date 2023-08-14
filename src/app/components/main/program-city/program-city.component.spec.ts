import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCityComponent } from './program-city.component';

describe('ProgramCityComponent', () => {
  let component: ProgramCityComponent;
  let fixture: ComponentFixture<ProgramCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramCityComponent]
    });
    fixture = TestBed.createComponent(ProgramCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
