import { TestBed } from '@angular/core/testing';

import { PvpService } from './pvp.service';

describe('PvpService', () => {
  let service: PvpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
