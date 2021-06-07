import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistanceComponent } from './components/home/coach/register/assistance/assistance.component';
import { PaymentComponent } from './components/home/coach/register/payment/payment.component';
import { PupilComponent } from './components/home/coach/register/pupil/pupil.component';
import { UserComponent } from './components/home/user/user.component';

const routes: Routes = [
  // { path : '', component : PupilComponent},
  { path: 'Pupil', component: PupilComponent },
  { path: 'User', component: UserComponent },
  { path: 'Assitance', component: AssistanceComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
