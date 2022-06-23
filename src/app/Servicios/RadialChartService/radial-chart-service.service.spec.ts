import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RadialChartServiceService } from './radial-chart-service.service';

describe('RadialChartServiceService', () => {
  let service: RadialChartServiceService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient,
      HttpHandler]
    });
    service = TestBed.inject(RadialChartServiceService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });
});
