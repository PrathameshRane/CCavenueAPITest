import { TestBed } from '@angular/core/testing';

import { EncdecpService } from './encdecp.service';

describe('EncdecpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncdecpService = TestBed.get(EncdecpService);
    expect(service).toBeTruthy();
  });
});
