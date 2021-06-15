import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrangementComponent } from './components/home/coach/generate/arrangement/arrangement/arrangement.component';
import { FormArrangementComponent } from './components/home/coach/generate/arrangement/form-arrangement/form-arrangement.component';
import { AssistanceComponent } from './components/home/coach/register/assistance/assistance.component';
import { PaymentComponent } from './components/home/coach/register/payment/payment.component';
import { StudentComponent } from './components/home/coach/register/student/student.component';
import { LoginComponent } from './components/home/login/login.component';

const routes: Routes = [
  { path: '', component : LoginComponent},
  { path: 'Home', component : PaymentComponent},
  { path: 'arrangement', component : ArrangementComponent},
  { path: 'arrangement/form/:id', component : FormArrangementComponent},
  { path: 'student', component : StudentComponent },
  { path: 'assitance', component : AssistanceComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
