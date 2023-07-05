import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxComponent } from './ui-ux.component';

describe('UiUxComponent', () => {
  let component: UiUxComponent;
  let fixture: ComponentFixture<UiUxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiUxComponent]
    });
    fixture = TestBed.createComponent(UiUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
