import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistanceComponent } from './components/home/coach/register/assistance/assistance.component';
import { StudentComponent } from './components/home/coach/register/student/student.component';
import { UserComponent } from './components/home/login/user.component';

const routes: Routes = [
  // { path : '', component : PupilComponent},
  { path: 'Student', component: StudentComponent },
  { path: 'User', component: UserComponent },
  { path: 'Assitance', component: AssistanceComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
