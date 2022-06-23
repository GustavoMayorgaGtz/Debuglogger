import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ExcelService } from './excel.service';

describe('ExcelService', () => {
  let service: ExcelService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,
      HttpHandler]
    });
    service = TestBed.inject(ExcelService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });
});
