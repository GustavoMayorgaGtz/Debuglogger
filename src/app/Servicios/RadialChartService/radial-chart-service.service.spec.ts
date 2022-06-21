import { TestBed } from '@angular/core/testing';

import { RadialChartServiceService } from './radial-chart-service.service';

describe('RadialChartServiceService', () => {
  let service: RadialChartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadialChartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
