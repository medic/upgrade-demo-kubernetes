import { TestBed } from '@angular/core/testing';

import { UpgradeCommandService } from './upgrade-command.service';

describe('UpgradeCommandService', () => {
  let service: UpgradeCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpgradeCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
