import { TestBed } from '@angular/core/testing';

import { UserTestingServiceService } from './user-testing-service.service';

describe('UserTestingServiceService', () => {
  let service: UserTestingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTestingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
