import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, AfterViewInit {
  //MenuResponsive
  public isOpenMenuResponsive: boolean = false;
  //Container1
  @ViewChild('container1') container1 !: ElementRef<HTMLDivElement>;
  public Container1 !: HTMLDivElement;
  public widthContainer1 !: number;
  public heightContainer1 !: number;
  constructor(
    private cb: ChangeDetectorRef
  ) { }
  ngAfterViewInit(): void {
    if (this.container1) {
      this.Container1 = this.container1.nativeElement;
      this.ChangeSizeMaps();
    }
    this.cb.detectChanges();
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.ChangeSizeMaps();
    })
  }

  ChangeSizeMaps() {
    if (window.innerWidth <= 700) {
      this.widthContainer1 = window.innerWidth;
      this.heightContainer1 = this.widthContainer1 - 100;
    } else {
      this.widthContainer1 = this.Container1.getBoundingClientRect().width;
      this.heightContainer1 = this.widthContainer1 - 100;
    }
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
      case 'inicio': {
        window.location.href = "/Inicio";
        break;
      }
      case 'tutorial': {
        window.location.href = "/Tutorial";
        break;
      }
    }
  }

}
