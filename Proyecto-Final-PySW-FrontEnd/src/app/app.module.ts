import { BeginnerComponent } from './components/home/coach/generate/beginner/beginner.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxDataTableModule} from "angular-9-datatable";
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoutineComponent } from './components/home/coach/generate/routine/routine.component';
import { PaymentComponent } from './components/home/coach/register/payment/payment.component';
import { AssistanceComponent } from './components/home/coach/register/assistance/assistance.component';
import { StudentComponent } from './components/home/coach/register/student/student.component';
import { FormDayRoutineComponent } from './components/home/coach/generate/day-routine/form-day-routine/form-day-routine.component';
import { DayRoutineComponent } from './components/home/coach/generate/day-routine/day-routine/day-routine.component';
import { StudentAssistenceComponent } from './components/home/student/student-assistence/student-assistence.component';
import { StudentRoutineComponent } from './components/home/student/student-routine/student-routine.component';
import { StudentPaymentComponent } from './components/home/student/student-payment/student-payment.component';
import { LoginService } from './services/login/login.service';
import { LoginComponent } from './components/home/login/login.component';

import { ArrangementComponent } from './components/home/coach/generate/arrangement/arrangement/arrangement.component';
import { FormArrangementComponent } from './components/home/coach/generate/arrangement/form-arrangement/form-arrangement.component';
import { TrainingComponent } from './components/home/coach/generate/training/training/training.component';
import { FormTrainingComponent } from './components/home/coach/generate/training/form-training/form-training.component';

//import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/login/token-interceptor.service';



import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './components/home/coach/generate/user/user.component';
import { ChallengeComponent } from './components/home/coach/generate/challenge/challenge.component';
import { AdvanceComponent } from './components/home/coach/generate/advance/advance.component';
import { ButtocksComponent } from './components/home/coach/generate/buttocks/buttocks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutineComponent,
    ArrangementComponent,
    PaymentComponent,
    AssistanceComponent,
    StudentComponent,
    DayRoutineComponent,
    StudentAssistenceComponent,
    StudentRoutineComponent,
    StudentPaymentComponent,
    LoginComponent,
    FormArrangementComponent,
    FormTrainingComponent,
    TrainingComponent,
    UserComponent,
    ChallengeComponent,
    AdvanceComponent,
    ButtocksComponent,
    BeginnerComponent,
    FormDayRoutineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDataTableModule,
    AlifeFileToBase64Module,
    CommonModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar : true,
      progressAnimation : 'decreasing'
    }),
  ],
  providers: [
    LoginService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
