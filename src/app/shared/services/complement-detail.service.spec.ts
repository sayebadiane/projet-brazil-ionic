import { TestBed } from '@angular/core/testing';

import { ComplementDetailService } from './complement-detail.service';

describe('ComplementDetailService', () => {
  let service: ComplementDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplementDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
