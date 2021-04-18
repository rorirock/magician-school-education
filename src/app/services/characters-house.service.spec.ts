import { TestBed } from '@angular/core/testing';

import { CharactersHouseService } from './characters-house.service';

describe('CharactersHouseService', () => {
  let service: CharactersHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
