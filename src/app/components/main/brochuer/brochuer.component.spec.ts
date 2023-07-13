import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochuerComponent } from './brochuer.component';

describe('BrochuerComponent', () => {
  let component: BrochuerComponent;
  let fixture: ComponentFixture<BrochuerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrochuerComponent]
    });
    fixture = TestBed.createComponent(BrochuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
