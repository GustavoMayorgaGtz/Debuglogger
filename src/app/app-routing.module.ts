import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { TutorialComponent } from './Pages/tutorial/tutorial.component';

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Tutorial', component: TutorialComponent},
  {path: 'Contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
