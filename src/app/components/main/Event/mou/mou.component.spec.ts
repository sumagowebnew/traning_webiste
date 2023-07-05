import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouComponent } from './mou.component';

describe('MouComponent', () => {
  let component: MouComponent;
  let fixture: ComponentFixture<MouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouComponent]
    });
    fixture = TestBed.createComponent(MouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
