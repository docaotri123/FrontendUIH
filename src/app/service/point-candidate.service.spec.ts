import { TestBed } from '@angular/core/testing';

import { PointCandidateService } from './point-candidate.service';

describe('PointCandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointCandidateService = TestBed.get(PointCandidateService);
    expect(service).toBeTruthy();
  });
});
