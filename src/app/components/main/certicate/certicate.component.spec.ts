import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerticateComponent } from './certicate.component';

describe('CerticateComponent', () => {
  let component: CerticateComponent;
  let fixture: ComponentFixture<CerticateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CerticateComponent]
    });
    fixture = TestBed.createComponent(CerticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
