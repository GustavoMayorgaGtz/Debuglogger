
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
import { Subscription, windowCount } from 'rxjs';
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
    offsetY: 40
    /***/
  };
  /***/
  /***/plotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "RGB(78, 111, 130)",
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
          color: "RGB(78, 111, 130)",
          fontSize: "calc(8px + 1vw)"
        },
        value: {
          offsetY: -30,
          color: "RGB(78, 111, 130)",
          fontSize: "calc(8px + 0.8vw)",
          show: true
        }
      }
    }
    /***/
  };
  /***/labels: string[] = ["Temperatura"];
  /***/fill: ApexFill = {
    colors: ["RGB(78, 111, 130)"]
    /***/
  };
  /****************Radial Bar default options (CLOSE)***********/


  /*************Line chart default options(Open) ********/
  public dataInformation?: number[] = [1, 232, 3, 32, 2, 32, 32, 32, 32, 34, 45, 45, 32, 21, 3, 421, 4, 1];
  lineChartData = [{
    data: this.dataInformation,
    label: 'Sensor2',
    backgroundColor: "#4e6f82",
    borderColor: "#4e6f82",
    pointBorderColor: "#4e6f82",
    hoverBorderColor: "#4e6f82",
    pointBackgroundColor: "#4e6f82",
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
          color: "#4e6f82"
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
  public valorAdvertenciaMax: number = 220;
  public valorAdvertenciaMin: number = 220;
  //
  public StyleSection2: string = "Section2";
  public isHideSection2: boolean = true;
  public StyleTriangulo: string = "Ocultar";
  public StyleSection1: string = "Section1";
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
    private AlertService: AlertServiceService,
    private LineChartService: LineChartServiceService,
    private RadialChartService: RadialChartServiceService,
    private ExcelService: ExcelService,
  ) { }


  reiniciarGrafica() {
    this.series2 = [83.5];
  /***/this.chartRadialBar = {
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
  /***/this.plotOptions = {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "RGB(78, 111, 130)",
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
            color: "RGB(78, 111, 130)",
            fontSize: "calc(8px + 1vw)"
          },
          value: {
            offsetY: -30,
            color: "RGB(78, 111, 130)",
            fontSize: "calc(8px + 0.8vw)",
            show: true
          }
        }
      }
      /***/
    };
  /***/this.labels = ["Temperatura"];
  /***/this.fill = {
      colors: ["RGB(78, 111, 130)"]
      /***/
    };
  }


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
    this.setHeight = document.body.scrollHeight + 20;
    window.addEventListener('resize', () => {
      if(window.innerWidth > 700)
      {
      
      }else
      {
        this.StyleSection2 = "Section2";
        this.StyleSection1 = "Section1";
        this.StyleTriangulo = "Ocultar";
      }
      if (!this.radialChart)
        window.location.reload();
      this.setHeight = document.body.scrollHeight + 20;
      this.SizeRadialChart();
    });
    setTimeout(() => {
      this.SelectSensor("Sensor 1");
      this.SizeRadialChart();
      this.DefineChecked();
      this.setHeight = document.body.scrollHeight + 20;
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
    // console.log("MenuOpcion function in InicioComponent.ts");
    // console.log("-> ", event);
    switch (event) {
      case 'tutorial': {
        window.location.href = "/Tutorial";
        break;
      }
      case 'contacto': {
        window.location.href = "/Contacto";
        break;
      }
    }
  }

  SelectSensor(sensor: string) {
    //Evento que captura el cambio del select, Capturando el sensor que se quiere ver
    // console.log("SelectSensor function in InicioComponent.ts");
    // console.log("-> ", sensor);
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
      // alert("warning");
      // console.warn("Function SizeRadialChart in InicioComponent");
      // console.warn("-> no se reconocio el contenedor de la grafica radial");
    }
  }

  async Subscriptions(sensor: string) {

    this.AlarmaSubcription = await this.AlertService.GetAlert({ name: sensor }).subscribe((Alert) => {
      if (Alert) {
        this.valorAdvertenciaMax = Alert.dataTriggerMax;
        this.valorAdvertenciaMin = Alert.dataTriggerMin;
      }
    })
    this.LineChartSubcription = await this.LineChartService.GetLineChart({ name: sensor }).subscribe((LineChart) => {

      if (!LineChart.isNull) {
        this.ChangeDataLineChart(LineChart.data);
        this.dataInformation = LineChart.data;
        let data: string[] = [];
        LineChart.data.forEach(element => { data.push(element.toString()); });
        this.barChartLabels = data;
      } else {
        console.log(LineChart);
        //  alert("No hay datos del sensor");
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
      backgroundColor: "RGB(78, 111, 130, 0.5)",
      borderColor: "#4e6f82",
      pointBorderColor: "#4e6f82",
      hoverBorderColor: "#4e6f82",
      pointBackgroundColor: "#4e6f82",
      borderWidth: 2,
    }];

    this.lineChartData = [{
      data: values,
      label: this.Name_Sensor,
      backgroundColor: "RGB(78, 111, 130, 0.5)",
      borderColor: "RGB(78, 111, 130)",
      pointBorderColor: "RGB(78, 111, 130)",
      hoverBorderColor: "RGB(78, 111, 130)",
      pointBackgroundColor: "RGB(78, 111, 130)",
      borderWidth: 2,
    }];
  }

  DownloadExcel(): void {
    this.ExcelService.DownloadExcel({ name: this.Name_Sensor }).subscribe((data) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = "http://localhost:3000/excel.xlsx";
      downloadLink.setAttribute('download', data.name + ".xls");
      document.body.appendChild(downloadLink);
      downloadLink.click();
    })
  }

  HideSection2() {
    if(window.innerWidth > 700)
    {
      if (this.isHideSection2){
        this.StyleSection2 = "Section2_Hide";
        setTimeout(()=>{
          this.StyleSection1 = "Section1Disploy"
          this.StyleTriangulo = "Ocultar_Invert";
        },1000);
        
        this.isHideSection2 = false;
      } else {
        this.StyleSection2 = "Section2_Show";
        this.StyleSection1 = "Section1"
        this.StyleTriangulo = "Ocultar";
        this.isHideSection2 = true;
      }
    }else
    {
      this.StyleSection2 = "Section2";
      this.StyleSection1 = "Section1"
      this.StyleTriangulo = "Ocultar";
    }
  
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
    return this.radio;
  }
  set Radio(value: boolean) {
    this.radio = value;
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
