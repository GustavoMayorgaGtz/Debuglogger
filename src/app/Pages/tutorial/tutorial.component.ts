import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //app menu events
  DisployMenu(event: Boolean) {
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
