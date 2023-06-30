import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonmainComponent } from './commonmain.component';

describe('CommonmainComponent', () => {
  let component: CommonmainComponent;
  let fixture: ComponentFixture<CommonmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonmainComponent]
    });
    fixture = TestBed.createComponent(CommonmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
