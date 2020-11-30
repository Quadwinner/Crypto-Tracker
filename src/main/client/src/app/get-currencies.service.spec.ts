import { TestBed } from '@angular/core/testing';

import { GetCurrenciesService } from './get-currencies.service';

describe('GetCurrenciesService', () => {
  let service: GetCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
