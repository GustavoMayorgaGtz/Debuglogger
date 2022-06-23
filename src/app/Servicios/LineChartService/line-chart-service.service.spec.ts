import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LineChartServiceService } from './line-chart-service.service';

describe('LineChartServiceService', () => {
  let service: LineChartServiceService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,
      HttpHandler]
    });
    service = TestBed.inject(LineChartServiceService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });
});
