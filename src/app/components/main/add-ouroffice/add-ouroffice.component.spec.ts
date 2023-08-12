import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOurofficeComponent } from './add-ouroffice.component';

describe('AddOurofficeComponent', () => {
  let component: AddOurofficeComponent;
  let fixture: ComponentFixture<AddOurofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOurofficeComponent]
    });
    fixture = TestBed.createComponent(AddOurofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
