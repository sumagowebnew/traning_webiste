import { TestBed } from '@angular/core/testing';

import { NewWebService } from './new-web.service';

describe('NewWebService', () => {
  let service: NewWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
