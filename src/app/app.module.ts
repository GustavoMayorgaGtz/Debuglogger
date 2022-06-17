import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './Componentes/componentes.module';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    HttpClientModule,
    NgApexchartsModule,
    NgChartsModule,
    DragDropModule
  ],
  providers: [Document],
  bootstrap: [AppComponent]
})
export class AppModule { }
