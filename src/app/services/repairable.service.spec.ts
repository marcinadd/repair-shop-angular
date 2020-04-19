import {TestBed} from '@angular/core/testing';

import {RepairableService} from './repairable.service';

describe('RepairableService', () => {
  let service: RepairableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
