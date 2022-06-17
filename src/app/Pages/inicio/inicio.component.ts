import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit {
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

  //Alarma
  public valorAdvertencia : number = 220;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    //Ontener los CheckBoxs
    if (this.lineC) this.lineElement = this.lineC.nativeElement;
    if (this.radioC) this.radioElement = this.radioC.nativeElement;
    if (this.dataC) this.dataElement = this.dataC.nativeElement;
    // if (this.barC) this.barElement = this.barC.nativeElement;
    //
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    //Eventos
    this.Height;
    window.addEventListener('resize', () => { this.Height });
    setTimeout(() => {
      this.DefineChecked();  
    }, 100);
    
  }

  DisployMenu(event: Boolean) {
    //Captura de Output del componente Menu para desplegar el menu o esconderlo
  }

  MenuOpcion(event: String) {
    //Evento del app-menu, captura la pagina a donde se quiere ir
    console.log("MenuOpcion function in InicioComponent.ts");
    console.log("-> ", event);
  }

  SelectSensor(sensor: string) {
    //Evento que captura el cambio del select, Capturando el sensor que se quiere ver
    console.log("SelectSensor function in InicioComponent.ts");
    console.log("-> ", sensor);
    this.nameSensor = sensor;
  }

  CheckBoxEvent(value: number) {
    //0 = line
    //1 = radio
    //2 = data
    //3 = bar
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
      // case 3: {
      //   //bar
      //   this.changeBar
      //   break;
      // }
    }
    this.DefineChecked();
   
    const comentario = {//Pruebas de encapsulamiento (cambiar estado de los checkbox)
      // console.log("ChechBoxEvent function in InicioComponent.ts")
      // console.log("-> ",value)
      // console.log("-> \"change of line\"",this.line);
      // this.changeLine;
      // console.log("-> \"change of line2\"",this.line);
      // console.log("-> Valores de Bar")
      // console.log("-> \"change of bar\"",this.bar);
      // this.changeBar;
      // console.log("-> \"change of bar2\"",this.bar);
      // console.log("-> Valores de Radio")
      // console.log("-> \"change of radio\"",this.radio);
      // this.changeRadio;
      // console.log("-> \"change of radio2\"",this.radio);
      // console.log("-> Valores de data")
      // console.log("-> \"change of data\"",this.data);
      // this.changeData;
      // console.log("-> \"change of data2\"",this.data);
    }
  }

  DefineChecked() {
    if (this.lineC) this.lineElement.checked = this.line; else console.warn("La pagina no se cargo correctamente");
    if (this.radioC) this.radioElement.checked = this.radio; else console.warn("La pagina no se cargo correctamente");
    if (this.dataC) this.dataElement.checked = this.data; else console.warn("La pagina no se cargo correctamente");
    // if (this.barC) this.barElement.checked = this.bar; else console.warn("La pagina no se cargo correctamente");
  }
  EditarAlarma()
  {
    let data = prompt("Valor de Advertencia:");
    if(data)
    {
      let aux = parseInt(data)
      if(aux as Number)
      {
        this.valorAdvertencia = aux;
      }else{
        alert("El tipo de valor es incorrecto");
        
      }
      
    }
      
      
 
    console.log("EditarAlarma function in InicioComponent.ts");
    console.log("-> \"data:\"",data)
  
    
  }
  //Encapsulamiento
  get Height() {
    /**Tamaño en horizontal usado para establecer el tamaño de .Section1 y .Section2 */
    return document.body.scrollHeight - 80;
  }
  get Min() {
    return this.min;
  }
  get Now() {
    return this.now;
  }
  get Max() {
    return this.max;
  }
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
  get Line()
  {
    return this.line;
  }
  get Radio()
  {
    return this.radio
  }
  get Data()
  {
    return this.data;
  }
}
