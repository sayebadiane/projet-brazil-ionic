import { TestBed } from '@angular/core/testing';

import { BehavioSubjectService } from './behavio-subject.service';

describe('BehavioSubjectService', () => {
  let service: BehavioSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavioSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
