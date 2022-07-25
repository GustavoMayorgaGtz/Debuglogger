import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './Componentes/componentes.module';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule} from 'ng-apexcharts';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { TutorialComponent } from './Pages/tutorial/tutorial.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    TutorialComponent
  ],
  imports: [
    HashLocationStrategy,
    LocationStrategy,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ComponentesModule,
    HttpClientModule,
    NgApexchartsModule,
    NgChartsModule,
    RouterModule
  ],
  providers: [Document,HttpClient,
  {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
