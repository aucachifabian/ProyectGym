import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlumnoComponent } from './components/home/entrenador/registro/alumno/alumno.component';
import { PagoComponent } from './components/home/entrenador/registro/pago/pago.component';
import { RutinaComponent } from './components/home/alumno/rutina/rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlumnoComponent,
    PagoComponent,
    RutinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
