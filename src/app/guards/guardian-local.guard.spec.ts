import { TestBed } from '@angular/core/testing';

import { GuardianLocalGuard } from './guardian-local.guard';

describe('GuardianLocalGuard', () => {
  let guard: GuardianLocalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianLocalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
