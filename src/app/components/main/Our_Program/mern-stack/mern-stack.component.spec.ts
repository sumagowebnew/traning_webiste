import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MernStackComponent } from './mern-stack.component';

describe('MernStackComponent', () => {
  let component: MernStackComponent;
  let fixture: ComponentFixture<MernStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MernStackComponent]
    });
    fixture = TestBed.createComponent(MernStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
