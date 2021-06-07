import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PupilComponent } from './components/home/coach/register/pupil/pupil.component';

const routes: Routes = [
  { path : '', component : PupilComponent},
  { path : 'Pupil', component : PupilComponent},
  { path : '**', redirectTo : '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
