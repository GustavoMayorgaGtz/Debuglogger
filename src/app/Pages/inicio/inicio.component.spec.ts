import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AlertServiceService } from 'src/app/Servicios/AlertService/alert-service.service';
import { ExcelService } from 'src/app/Servicios/DownloadExcel/excel.service';
import { LineChartServiceService } from 'src/app/Servicios/LineChartService/line-chart-service.service';
import { RadialChartServiceService } from 'src/app/Servicios/RadialChartService/radial-chart-service.service';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  // let testBedService1: AlertServiceService;
  // let testBedService2: ExcelService;
  // let testBedService3: LineChartServiceService;
  // let testBedService4: RadialChartServiceService;
  // let testBedService5: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AlertServiceService,
        HttpClient,
        HttpHandler,
        ExcelService,
        LineChartServiceService,
        RadialChartServiceService],
      declarations: [InicioComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    // testBedService1 = TestBed.inject(AlertServiceService);
    // testBedService2 = TestBed.inject(ExcelService);
    // testBedService3 = TestBed.inject(LineChartServiceService);
    // testBedService4 = TestBed.inject(RadialChartServiceService);
    // testBedService5 = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(testBedService1).toBeTruthy();
    // expect(testBedService2).toBeTruthy();
    // expect(testBedService3).toBeTruthy();
    // expect(testBedService4).toBeTruthy();
    // expect(testBedService5).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
