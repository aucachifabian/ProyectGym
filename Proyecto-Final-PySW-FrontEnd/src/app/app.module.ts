import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxDataTableModule} from "angular-9-datatable";
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlumnoComponent } from './components/home/entrenador/registro/alumno/alumno.component';
import { PagoComponent } from './components/home/entrenador/registro/pago/pago.component';
import { RutinaComponent } from './components/home/entrenador/generar/rutina/rutina.component';
import { UsuarioComponent } from './components/home/entrenador/generar/usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlumnoComponent,
    PagoComponent,
    RutinaComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDataTableModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
