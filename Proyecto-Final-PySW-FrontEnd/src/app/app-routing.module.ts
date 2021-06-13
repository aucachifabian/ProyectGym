import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistanceComponent } from './components/home/coach/register/assistance/assistance.component';
import { PaymentComponent } from './components/home/coach/register/payment/payment.component';
import { StudentComponent } from './components/home/coach/register/student/student.component';
import { LoginComponent } from './components/home/login/login.component';

const routes: Routes = [
  // { path : '', component : PupilComponent},
  { path: 'Home', component : PaymentComponent},
  { path: 'Login', component : LoginComponent},
  { path: 'Student', component : StudentComponent },
  { path: 'Assitance', component : AssistanceComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
