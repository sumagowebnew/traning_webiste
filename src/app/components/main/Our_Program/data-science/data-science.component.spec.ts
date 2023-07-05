import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceComponent } from './data-science.component';

describe('DataScienceComponent', () => {
  let component: DataScienceComponent;
  let fixture: ComponentFixture<DataScienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataScienceComponent]
    });
    fixture = TestBed.createComponent(DataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
