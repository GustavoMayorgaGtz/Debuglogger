import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AlertServiceService } from './alert-service.service';

describe('AlertServiceService', () => {
  let service: AlertServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,
      HttpHandler]
    });
    service = TestBed.inject(AlertServiceService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
