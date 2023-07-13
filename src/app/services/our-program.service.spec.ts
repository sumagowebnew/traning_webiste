import { TestBed } from '@angular/core/testing';

import { OurProgramService } from './our-program.service';

describe('OurProgramService', () => {
  let service: OurProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
