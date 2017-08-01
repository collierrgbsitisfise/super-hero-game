import { TestBed, inject } from '@angular/core/testing';

import { FightLoopService } from './fight-loop.service';

describe('FightLoopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FightLoopService]
    });
  });

  it('should be created', inject([FightLoopService], (service: FightLoopService) => {
    expect(service).toBeTruthy();
  }));
});
