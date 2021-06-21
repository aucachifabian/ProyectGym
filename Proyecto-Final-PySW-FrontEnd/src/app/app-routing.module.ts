import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrangementComponent } from './components/home/coach/generate/arrangement/arrangement/arrangement.component';
import { FormArrangementComponent } from './components/home/coach/generate/arrangement/form-arrangement/form-arrangement.component';
import { DayRoutineComponent } from './components/home/coach/generate/day-routine/day-routine/day-routine.component';
import { FormDayRoutineComponent } from './components/home/coach/generate/day-routine/form-day-routine/form-day-routine.component';
import { RoutineComponent } from './components/home/coach/generate/routine/routine.component';
import { FormTrainingComponent } from './components/home/coach/generate/training/form-training/form-training.component';
import { TrainingComponent } from './components/home/coach/generate/training/training/training.component';
import { UserComponent } from './components/home/coach/generate/user/user.component';
import { AssistanceComponent } from './components/home/coach/register/assistance/assistance.component';
import { PaymentComponent } from './components/home/coach/register/payment/payment.component';
import { StudentComponent } from './components/home/coach/register/student/student.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/home/login/login.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'login', component : LoginComponent },
  { path: 'payment', component : PaymentComponent },
  { path: 'user', component : UserComponent },
  { path: 'arrangement', component : ArrangementComponent },
  { path: 'arrangement/form/:id', component : FormArrangementComponent },
  { path: 'training', component : TrainingComponent },
  { path: 'training/form/:id', component : FormTrainingComponent },
  { path: 'student', component : StudentComponent },
  { path: 'routine', component : RoutineComponent },
  { path: 'user', component : UserComponent },
  { path: 'assitance', component : AssistanceComponent },
  { path: 'dayRoutine', component : DayRoutineComponent },
  { path: 'dayRoutine/form/:id', component : FormDayRoutineComponent },
  { path: '**', redirectTo: '/' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
