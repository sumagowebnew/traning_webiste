import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogoComponent } from './add-logo.component';

describe('AddLogoComponent', () => {
  let component: AddLogoComponent;
  let fixture: ComponentFixture<AddLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLogoComponent]
    });
    fixture = TestBed.createComponent(AddLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
