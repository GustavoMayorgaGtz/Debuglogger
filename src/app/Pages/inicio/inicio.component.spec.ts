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
  let alertService: AlertServiceService;
  let excelService: ExcelService;
  let LineChartService: LineChartServiceService;
  let radialChartService: RadialChartServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AlertServiceService,
        HttpClient,
        HttpHandler,
        ExcelService,
        LineChartServiceService,
        RadialChartServiceService],
      declarations: [InicioComponent]
    }).compileComponents();

    alertService = TestBed.inject(AlertServiceService);
    excelService = TestBed.inject(ExcelService);
    LineChartService = TestBed.inject(LineChartServiceService);
    radialChartService = TestBed.inject(RadialChartServiceService);
      
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('seleccion de sensor', () => {
    
    component.SelectSensor('Sensor 1');
    let Name_Sensor = component.Name_Sensor;
    expect(Name_Sensor).toEqual("Sensor 1");
    component.SelectSensor('Sensor 2');
    Name_Sensor = component.Name_Sensor;
    expect(Name_Sensor).toEqual("Sensor 2");
  })

  it('seleccion de checkbox', () => {
    
    //
    component.CheckBoxEvent(0);
    let line = component.line;
    expect(line).toBeFalse();
    component.CheckBoxEvent(0);
    line = component.line;
    expect(line).toBeTrue();
    //
    //
    component.CheckBoxEvent(1);
    let radio = component.radio;
    expect(radio).toBeFalsy();
    component.CheckBoxEvent(1);
    radio = component.radio;
    expect(radio).toBeTruthy();
    //
    //
    component.CheckBoxEvent(2);
    let data = component.data;
    expect(data).toBeFalsy();
    component.CheckBoxEvent(2);
    data = component.data;
    expect(data).toBeTruthy();
    //
  })
  it('Cargar Servicios', ()=> {
    //AlertService
    expect(alertService).toBeTruthy();
    //RadialService
    expect(radialChartService).toBeTruthy();
    //LineChartService
    expect(LineChartService).toBeTruthy();
    //Excel Service
    expect(excelService).toBeTruthy();
  })
  it('LineChartService', () => {
    expect(LineChartService).toBeTruthy();
    let data
  })
});
