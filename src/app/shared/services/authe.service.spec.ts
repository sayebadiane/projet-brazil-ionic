import { TestBed } from '@angular/core/testing';

import { AutheService } from './authe.service';

describe('AutheService', () => {
  let service: AutheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
