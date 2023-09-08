import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramFeesCategoryComponent } from './program-fees-category.component';

describe('ProgramFeesCategoryComponent', () => {
  let component: ProgramFeesCategoryComponent;
  let fixture: ComponentFixture<ProgramFeesCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramFeesCategoryComponent]
    });
    fixture = TestBed.createComponent(ProgramFeesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
