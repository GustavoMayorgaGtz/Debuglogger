import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter<string>();
  @Output() isDisployMenu = new EventEmitter<boolean>();
  
  public option: string = "inicio";
  constructor() { }

  ngOnInit(): void {
   
  }

  Inicio()
  {
    this.option = "inicio";
    this.setOption();
  }

  Tutorial()
  {
   this.option = "tutorial";
   this.setOption();
  }

  Configuracion()
  {
   this.option = "configuracion";
   this.setOption();
  }

  setOption()
  {
    this.eventEmitter.emit(this.option);
  }

  disployMenu()
  {
      /*Esta funcion despliega el menu en responsive, sin embargo lo hace desde el componente inicio,
       *  ya que el menu solo contiene un tamaño especifico*/
      this.isDisployMenu.emit(true);
  }

}
