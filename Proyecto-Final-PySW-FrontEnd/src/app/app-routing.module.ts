import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './components/home/entrenador/registro/alumno/alumno.component';

const routes: Routes = [
  { path : '', component : AlumnoComponent},
  { path : 'Alumno', component : AlumnoComponent},
  { path : '**', redirectTo : '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
