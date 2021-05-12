import { TestBed } from '@angular/core/testing';

import { ApiCasosService } from './api-casos.service';

describe('ApiCasosService', () => {
  let service: ApiCasosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCasosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
