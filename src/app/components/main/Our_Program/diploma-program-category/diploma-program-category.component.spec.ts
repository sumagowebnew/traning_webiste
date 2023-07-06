import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaProgramCategoryComponent } from './diploma-program-category.component';

describe('DiplomaProgramCategoryComponent', () => {
  let component: DiplomaProgramCategoryComponent;
  let fixture: ComponentFixture<DiplomaProgramCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiplomaProgramCategoryComponent]
    });
    fixture = TestBed.createComponent(DiplomaProgramCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
