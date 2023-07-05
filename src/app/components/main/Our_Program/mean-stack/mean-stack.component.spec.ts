import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEANStackComponent } from './mean-stack.component';

describe('MEANStackComponent', () => {
  let component: MEANStackComponent;
  let fixture: ComponentFixture<MEANStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MEANStackComponent]
    });
    fixture = TestBed.createComponent(MEANStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
