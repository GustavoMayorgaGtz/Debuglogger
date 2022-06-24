
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { response } from 'express';
/*Importaciones de ApexCharts (Open)*/
import {
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ChartComponent
} from "ng-apexcharts";
import { Subscription } from 'rxjs';
import { AlertServiceService } from 'src/app/Servicios/AlertService/alert-service.service';
import { ExcelService } from 'src/app/Servicios/DownloadExcel/excel.service';
import { LineChartServiceService } from 'src/app/Servicios/LineChartService/line-chart-service.service';
import { RadialChartServiceService } from 'src/app/Servicios/RadialChartService/radial-chart-service.service';


export type ChartOptions = {
  serie2: ApexNonAxisChartSeries;
  chartRadialBar: ApexChart;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  dataLabelsRadial: ApexDataLabels;
  responsive: ApexResponsive
};
/*Importaciones de ApexCharts (Close)*/
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ExcelService, AlertServiceService, LineChartServiceService, RadialChartServiceService]
})


export class InicioComponent implements OnInit, AfterViewInit {

  /****************Radial Bar default options(Open) ***********/
  /***/@ViewChild('chart') radialChart !: ChartComponent;
  /***/public RadialChart !: ChartComponent;
  /***/@ViewChild('RadialChart') radialChartContainer !: ElementRef<HTMLDivElement>
  /***/public RadialContianer !: HTMLDivElement;
  /***/public WidthRadialGraph !: number;
  /***/public HeightRadialGraph !: number;
  /***/series2: ApexNonAxisChartSeries = [83.5];
  /***/chartRadialBar: ApexChart = {
    zoom: {
      enabled: true,
      autoScaleYaxis: false,
      type: 'y',
    },
    width: "100%",
    height: "100%",
    type: "radialBar",
    offsetY: 50
    /***/
  };
  /***/
  /***/plotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#202020",
        strokeWidth: "50%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -1,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
      hollow: {
        size: "90%",
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: 20,
          show: true,
          color: "#73be69",
          fontSize: "calc(8px + 1vw)"
        },
        value: {
          offsetY: -30,
          color: "#73be69",
          fontSize: "calc(8px + 0.8vw)",
          show: true
        }
      }
    }
    /***/
  };
  /***/labels: string[] = ["Temperatura"];
  /***/fill: ApexFill = {
    colors: ["#73be69"]
    /***/
  };
  /****************Radial Bar default options (CLOSE)***********/


  /*************Line chart default options(Open) ********/
  public dataInformation?: number[] = [1, 232, 3, 32, 2, 32, 32, 32, 32, 34, 45, 45, 32, 21, 3, 421, 4, 1];
  lineChartData = [{
    data: this.dataInformation,
    label: 'Sensor2',
    backgroundColor: "rgba(155,190,105,0.5)",
    borderColor: "#73be69",
    pointBorderColor: "#73be69",
    hoverBorderColor: "#90EC83)",
    pointBackgroundColor: "#5A9852",
    borderWidth: 2,
  }];

  lineChartOptions = {
    fill: 'origin',
    responsive: true,
    backgroundColor: "['red','green','blue','purple','yellow','brown','magenta','cyan']",
    maintainAspectRatio: false,
    animation: false,
    options: {
      animation: {
        duration: 0
      }
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          display: false,
          color: "#73be69"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  barChartLabels: string[] = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
  lineChartLegend = true;
  lineChartPlugins = [];
  typeGraphic: any = 'line';
  /*************Line chart default options(Close) ********/




  //Nombre del sensor
  private nameSensor: string = "Sensor 1";
  //Datos de los sensores
  private max: number = 0;
  private now: number = 0;
  private min: number = 0;
  //Estado de los checkbox 
  @ViewChild('line') lineC !: ElementRef<HTMLInputElement>;
  public lineElement !: HTMLInputElement;
  @ViewChild('radio') radioC !: ElementRef<HTMLInputElement>;
  public radioElement !: HTMLInputElement;
  @ViewChild('data') dataC !: ElementRef<HTMLInputElement>;
  public dataElement !: HTMLInputElement;
  public line: boolean = true;
  public radio: boolean = true;
  public data: boolean = true;
  //Tamaños
  public height: number = 0;
  //Alarma
  public valorAdvertencia: number = 220;

  //Subscription
  public AlarmaSubcription!: Subscription;
  public LineChartSubcription !: Subscription;
  public RadialChartSubscription !: Subscription;
  public AlarmaEditSubscription !: Subscription;
  //MenuResponsive
  public isOpenMenuResponsive: boolean = false;
  /**********************************************************************************************************************/
  /**********************************************************************************************************************/

  constructor(
    private cd: ChangeDetectorRef,
    private AlertService: AlertServiceService,
    private LineChartService: LineChartServiceService,
    private RadialChartService: RadialChartServiceService,
    private ExcelService: ExcelService,
  ) { }



  ngAfterViewInit(): void {
    //Ontener los CheckBoxs
    if (this.lineC) this.lineElement = this.lineC.nativeElement;
    if (this.radioC) this.radioElement = this.radioC.nativeElement;
    if (this.dataC) this.dataElement = this.dataC.nativeElement;
    if (this.radialChartContainer) this.RadialContianer = this.radialChartContainer.nativeElement;
    if (this.radialChart) this.RadialChart = this.RadialChart;
    // this.cd.detectChanges();
  }

  ngOnInit(): void {
    //Eventos
    this.setHeight = document.body.scrollHeight - 80;
    window.addEventListener('resize', () => {
      this.setHeight = document.body.scrollHeight - 80;
      this.SizeRadialChart();
    });
    setTimeout(() => {
      this.SelectSensor("Sensor 1");
      this.SizeRadialChart();
      this.DefineChecked();
      this.setHeight = document.body.scrollHeight - 80;
      clearTimeout();
    }, 100);

    //Peticiones para actualizar los datos en tiempo real
    setInterval(() => {

      this.SelectSensor(this.Name_Sensor);

      clearInterval();
    }, 10000);
  }

  DisployMenu(event: Boolean) {
    //Captura de Output del componente Menu para desplegar el menu o esconderlov
    this.isOpenMenuResponsive = !this.isOpenMenuResponsive;
  }

  MenuOpcion(event: String) {
    //Evento del app-menu, captura la pagina a donde se quiere ir
    console.log("MenuOpcion function in InicioComponent.ts");
    console.log("-> ", event);
    switch (event) {
      case 'tutorial': {
        window.location.href = "/Tutorial";
        break;
      }
      case 'contacto': {
        window.location.href="/Contacto";
        break;
      }
    }
  }

  SelectSensor(sensor: string) {
    //Evento que captura el cambio del select, Capturando el sensor que se quiere ver
    console.log("SelectSensor function in InicioComponent.ts");
    console.log("-> ", sensor);
    this.nameSensor = sensor;
    this.Subscriptions(this.nameSensor);
  }

  CheckBoxEvent(value: number) {
    //0 = line
    //1 = radio
    //2 = data
    switch (value) {
      case 0: {
        //line
        this.changeLine
        break;
      }
      case 1: {
        //radio
        this.changeRadio
        break;
      }
      case 2: {
        //data
        this.changeData
        break;
      }

    }
    this.DefineChecked();
  }

  DefineChecked() {
    if (this.lineC) this.lineElement.checked = this.line; else console.warn("La pagina no se cargo correctamente");
    if (this.radioC) this.radioElement.checked = this.radio; else console.warn("La pagina no se cargo correctamente");
    if (this.dataC) this.dataElement.checked = this.data; else console.warn("La pagina no se cargo correctamente");
    // if (this.barC) this.barElement.checked = this.bar; else console.warn("La pagina no se cargo correctamente");
  }
  EditarAlarma() {
    let data = prompt("Valor de Advertencia:");
    if (data) {
      let aux = parseInt(data)
      if (aux as Number) {
        this.valorAdvertencia = aux;
        this.AlarmaEditSubscription = this.AlertService.UpdateAlert({ name: this.Name_Sensor, dataTrigger: this.valorAdvertencia }).subscribe((Data) => {
        })
      } else {
        alert("El tipo de valor es incorrecto");

      }

    }
    console.log("EditarAlarma function in InicioComponent.ts");
    console.log("-> \"data:\"", data)
  }
  SizeRadialChart() {
    //Cambiamos el tamaño de la grafica radial
    if (this.RadialContianer) {
      // console.log("Function SizeRadialChart in InicioComponent");
      // console.log("-> Si se reconocio el contenedor de la grafica radial");
      let widthContainer = this.RadialContianer.getBoundingClientRect().width;
      let heightContainer = this.RadialContianer.getBoundingClientRect().height;
      this.WidthRadialGraph = widthContainer;
      this.HeightRadialGraph = heightContainer;
      this.chartRadialBar = {
        zoom: {
          enabled: true,
          autoScaleYaxis: false,
          type: 'y'
        },
        width: "100%",
        height: "100%",
        type: "radialBar",
        offsetY: 20
      };
    } else {
      alert("warning");
      console.warn("Function SizeRadialChart in InicioComponent");
      console.warn("-> no se reconocio el contenedor de la grafica radial");
    }
  }

  async Subscriptions(sensor: string) {

    this.AlarmaSubcription = await this.AlertService.GetAlert({ name: sensor }).subscribe((Alert) => {
      if (Alert) {
        this.valorAdvertencia = Alert.dataTrigger;
      }
    })
    this.LineChartSubcription = await this.LineChartService.GetLineChart({ name: sensor }).subscribe((LineChart) => {

      if (!LineChart.isNull) {
        this.ChangeDataLineChart(LineChart.data);
        this.dataInformation = LineChart.data;
        let data: string[] = [];
        LineChart.data.forEach(element => { data.push(element.toString()); });
        this.barChartLabels = data;
      }else
      {
        console.log(LineChart);
        alert("No hay datos del sensor");
      }
    });
    this.RadialChartSubscription = await this.RadialChartService.GetRadialChart({ name: sensor }).subscribe((RadialChart) => {
      if (RadialChart) {
        this.Now = RadialChart.dataNow;
        this.Min = RadialChart.dataMin;
        this.Max = RadialChart.dataMax;
        let MaxAux = this.Max / this.Min;
        let NowAux = this.Now / this.Min;
        let series = (NowAux * 100) / MaxAux;
        this.series2 = [parseFloat(series.toFixed(3))];
      }
    })

  }

  ChangeDataLineChart(values: number[]) {
    this.dataInformation = [1, 232, 3, 32, 2, 32, 32, 32, 32, 34, 45, 45, 32, 21, 3, 421, 4, 1];
    this.lineChartData = [{
      data: this.dataInformation,
      label: this.Name_Sensor,
      backgroundColor: "rgba(155,190,105,0.5)",
      borderColor: "#73be69",
      pointBorderColor: "#73be69",
      hoverBorderColor: "#90EC83)",
      pointBackgroundColor: "#5A9852",
      borderWidth: 2,
    }];

    this.lineChartData = [{
      data: values,
      label: this.Name_Sensor,
      backgroundColor: "rgba(155,190,105,0.5)",
      borderColor: "#73be69",
      pointBorderColor: "#73be69",
      hoverBorderColor: "#90EC83)",
      pointBackgroundColor: "#5A9852",
      borderWidth: 2,
    }];
  }

  DownloadExcel(): void {
    this.ExcelService.DownloadExcel({ name: this.Name_Sensor }).subscribe((data) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = "./assets/excel.xlsx";
      downloadLink.setAttribute('download', data.name + ".xls");
      document.body.appendChild(downloadLink);
      downloadLink.click();
    })
  }


  //Encapsulamiento
  get Height() {
    /**Tamaño en horizontal usado para establecer el tamaño de .Section1 y .Section2 */
    return this.height;
  }
  set setHeight(value: number) {
    this.height = value;
  }
  /////
  get Min() {
    return this.min;
  }
  set Min(value: number) {
    this.min = value;
  }
  /////
  get Now() {
    return this.now;
  }
  set Now(value: number) {
    this.now = value;
  }
  /////
  get Max() {
    return this.max;
  }
  set Max(value: number) {
    this.max = value;
  }
  /////
  get Name_Sensor() {
    return this.nameSensor;
  }
  get changeLine() {
    return this.line = this.line ? false : true;
  }
  get changeData() {
    return this.data = this.data ? false : true;
  }
  get changeRadio() {
    return this.radio = this.radio ? false : true;
  }
  get Line() {
    return this.line;
  }
  get Radio() {
    return this.radio
  }
  get Data() {
    return this.data;
  }
  // ngOnDestroy(): void {
  //   this.AlarmaSubcription.unsubscribe;
  //   this.LineChartSubcription.unsubscribe;
  //   this.RadialChartSubscription.unsubscribe;
  // }
}
