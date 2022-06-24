import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  //MenuResponsive
  public isOpenMenuResponsive: boolean = false;
  constructor() { }

  ngOnInit(): void {
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
      case 'contacto': {
        window.location.href = "/Contacto";
        break;
      }
    }
  }

}
