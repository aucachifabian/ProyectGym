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
import { RoutineComponent } from './components/home/coach/generate/routine/routine.component';
import { ArrangementComponent } from './components/home/coach/generate/arrangement/arrangement.component';
import { PaymentComponent } from './components/home/coach/register/payment/payment.component';
import { AssistanceComponent } from './components/home/coach/register/assistance/assistance.component';
import { UserComponent } from './components/home/login/user.component';
import { StudentComponent } from './components/home/coach/register/student/student.component';
import { TrainingComponent } from './components/home/coach/generate/training/training.component';
import { DayRoutineComponent } from './components/home/coach/generate/day-routine/day-routine.component';
import { StudentAssistenceComponent } from './components/home/student/student-assistence/student-assistence.component';
import { StudentRoutineComponent } from './components/home/student/student-routine/student-routine.component';
import { StudentPaymentComponent } from './components/home/student/student-payment/student-payment.component';



//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutineComponent,
    ArrangementComponent,
    PaymentComponent,
    AssistanceComponent,
    UserComponent,
    StudentComponent,
    TrainingComponent,
    DayRoutineComponent,
    StudentAssistenceComponent,
    StudentRoutineComponent,
    StudentPaymentComponent


    //BrowserAnimationsModule,
    //ToastrModule.forRoot(),
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
